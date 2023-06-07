from django.contrib import admin
from .models import Manhole, Pipe, CollectorPoint, DischargePoint

admin.site.register(Manhole)
admin.site.register(Pipe)
admin.site.register(CollectorPoint)
admin.site.register(DischargePoint)
