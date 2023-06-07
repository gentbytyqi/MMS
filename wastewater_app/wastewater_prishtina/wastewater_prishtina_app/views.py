import logging
from rest_framework import viewsets
from .models import Manhole, Pipe, CollectorPoint, DischargePoint
from .serializers import (
    ManholeSerializer, PipeSerializer,
    CollectorPointSerializer, DischargePointSerializer
)
from django.contrib.gis.geos import Point
from pyproj import Transformer
from rest_framework.response import Response
from django.contrib.gis.geos import GEOSGeometry

logger = logging.getLogger(__name__)

transformer = Transformer.from_crs("EPSG:9141", "EPSG:4326")


class BaseViewSet(viewsets.ModelViewSet):
    transformer = Transformer.from_crs("EPSG:9141", "EPSG:4326")
    logger = logging.getLogger(__name__)

    def transform_coordinates(self, coordinates):
        transformed_coordinates = []

        try:
            if isinstance(coordinates, (list, tuple)):
                if len(coordinates) >= 2:
                    if isinstance(coordinates[0], (list, tuple)):
                        # LineString coordinates
                        for coord in coordinates:
                            transformed_coord = self.transformer.transform(coord[0], coord[1])
                            transformed_coordinates.append(transformed_coord)
                    else:
                        # Point coordinates
                        transformed_coordinates = self.transformer.transform(coordinates[0], coordinates[1])
            else:
                self.logger.warning(f"Invalid coordinate format: {coordinates}")
        except (IndexError, TypeError):
            self.logger.warning(f"Invalid coordinate format: {coordinates}")

        self.logger.info(f"Original Coordinate: {coordinates}")
        self.logger.info(f"Transformed Coordinates: {transformed_coordinates}")

        return transformed_coordinates





    def transform_and_respond(self, instance, serializer_class):
        serializer = serializer_class(instance)
        transformed_coordinates = self.transform_coordinates(instance.location.coords)

        if len(transformed_coordinates) == 2:
            transformed_location = {
                'type': 'Point',
                'coordinates': transformed_coordinates
            }
        else:
            transformed_location = {
                'type': 'LineString',
                'coordinates': transformed_coordinates
            }

        data = serializer.data
        data['location'] = transformed_location
        return Response(data)


    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer_class = self.get_serializer_class()
        return self.transform_and_respond(instance, serializer_class)



class ManholeViewSet(BaseViewSet):
    queryset = Manhole.objects.all()
    serializer_class = ManholeSerializer

    def list(self, request, *args, **kwargs):
        manholes = self.get_queryset()
        serializer = self.get_serializer(manholes, many=True)
        transformed_data = []

        for manhole in serializer.data:
            location = manhole['location']
            if isinstance(location, str):
                # Convert the location string to a dictionary
                location = GEOSGeometry(location)
                location = {
                    'type': location.geom_type,
                    'coordinates': location.coords
                }

            transformed_coordinates = self.transform_coordinates(location.get('coordinates'))
            transformed_location = {
                'type': 'Point',
                'coordinates': transformed_coordinates
            }
            manhole['location'] = transformed_location
            transformed_data.append(manhole)

        return Response(transformed_data)


class PipeViewSet(BaseViewSet):
    queryset = Pipe.objects.all()
    serializer_class = PipeSerializer

    def transform_coordinates(self, coordinates):
        transformed_coordinates = []

        for coord in coordinates:
            transformed_coord = self.transformer.transform(coord[0], coord[1])
            transformed_coordinates.append(transformed_coord)

        return transformed_coordinates

    def transform_location(self, location):
        if isinstance(location, str):
            location = GEOSGeometry(location)
        transformed_coordinates = self.transform_coordinates(location.coords)
        transformed_location = {
            'type': location.geom_type,
            'coordinates': transformed_coordinates
        }
        return transformed_location

    def transform_pipes(self, pipes):
        transformed_pipes = []

        for pipe in pipes:
            transformed_pipe = dict(pipe)

            # Check if location field is present
            if 'location' in transformed_pipe:
                location = transformed_pipe['location']
                if location:
                    transformed_location = self.transform_location(location)
                    transformed_pipe['location'] = transformed_location

            transformed_pipes.append(transformed_pipe)

        return transformed_pipes

    def list(self, request, *args, **kwargs):
        pipes = self.get_queryset()
        serializer = self.get_serializer(pipes, many=True)
        transformed_data = self.transform_pipes(serializer.data)

        return Response(transformed_data)




class CollectorPointViewSet(BaseViewSet):
    queryset = CollectorPoint.objects.all()
    serializer_class = CollectorPointSerializer

    def list(self, request, *args, **kwargs):
        collector_points = self.get_queryset()
        serializer = self.get_serializer(collector_points, many=True)
        transformed_data = []

        for collector_point in serializer.data:
            location = collector_point['location']
            if isinstance(location, str):
                # Convert the location string to a dictionary
                location = GEOSGeometry(location)
                location = {
                    'type': location.geom_type,
                    'coordinates': location.coords
                }

            transformed_coordinates = self.transform_coordinates(location.get('coordinates'))
            transformed_location = {
                'type': 'Point',
                'coordinates': transformed_coordinates
            }
            collector_point['location'] = transformed_location
            transformed_data.append(collector_point)

        return Response(transformed_data)


class DischargePointViewSet(BaseViewSet):
    queryset = DischargePoint.objects.all()
    serializer_class = DischargePointSerializer

    def list(self, request, *args, **kwargs):
        discharge_points = self.get_queryset()
        serializer = self.get_serializer(discharge_points, many=True)
        transformed_data = []

        for discharge_point in serializer.data:
            location = discharge_point['location']
            if isinstance(location, str):
                # Convert the location string to a dictionary
                location = GEOSGeometry(location)
                location = {
                    'type': location.geom_type,
                    'coordinates': location.coords
                }

            transformed_coordinates = self.transform_coordinates(location.get('coordinates'))
            transformed_location = {
                'type': 'Point',
                'coordinates': transformed_coordinates
            }
            discharge_point['location'] = transformed_location
            transformed_data.append(discharge_point)

        return Response(transformed_data)

