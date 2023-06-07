from django.urls import include, path
from rest_framework import routers
from wastewater_prishtina_app.views import (
    ManholeViewSet, PipeViewSet, CollectorPointViewSet, DischargePointViewSet
)

router = routers.DefaultRouter()
router.register(r'manholes', ManholeViewSet, basename='manholes')
router.register(r'pipes', PipeViewSet, basename='pipes')
router.register(r'collector-points', CollectorPointViewSet, basename='collector-points')
router.register(r'discharge-points', DischargePointViewSet, basename='discharge-points')

urlpatterns = [
    path('', include(router.urls)),
]
