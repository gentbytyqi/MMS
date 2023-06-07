import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wastewater_prishtina.settings')
django.setup()

from wastewater_prishtina_app.models import Manhole
from django.contrib.gis import gdal
import logging
from django.contrib.gis.geos import Point

# Configure logging to display log messages
logging.basicConfig(level=logging.INFO)

# Define a function to test coordinate transformations
def test_coordinate_transformations():
    manhole = Manhole.objects.get(id=3)

    # Transform Manhole coordinates
    manhole_coordinates = [manhole.location.coords]  # Wrap the coordinates in a list

    transformed_coordinates = []
    for coord in manhole_coordinates:
        # Create a point using the coordinates
        point = Point(coord[0], coord[1], srid=9141)
        # Create a spatial reference for EPSG:4326
        srs = gdal.SpatialReference('EPSG:4326')
        # Transform the point to EPSG:4326
        point.transform(srs)
        # Get the transformed coordinates
        transformed_coord = (point.y, point.x)
        transformed_coordinates.append(transformed_coord)

    # Log the original and transformed coordinates for verification
    logger = logging.getLogger(__name__)
    logger.info("Original Manhole Coordinates:")
    logger.info(manhole_coordinates)
    logger.info("Transformed Manhole Coordinates:")
    logger.info(transformed_coordinates)

# Call the function to test coordinate transformations
test_coordinate_transformations()
