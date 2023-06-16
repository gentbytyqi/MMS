from rest_framework import serializers
from .models import Manhole, Pipe, CollectorPoint, DischargePoint, WorkOrder

class ManholeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manhole
        fields = '__all__'

class PipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pipe
        fields = '__all__'

class CollectorPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollectorPoint
        fields = '__all__'

class DischargePointSerializer(serializers.ModelSerializer):
    class Meta:
        model = DischargePoint
        fields = '__all__'

class WorkOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkOrder
        fields = '__all__'