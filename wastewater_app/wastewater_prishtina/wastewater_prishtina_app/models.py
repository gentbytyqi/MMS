from django.contrib.gis.db import models
from django.contrib.auth.models import User

class Manhole(models.Model):
    code = models.CharField(max_length=20, unique=True)
    depth = models.DecimalField(max_digits=5, decimal_places=2)
    material = models.CharField(max_length=50)
    installation_date = models.DateField()
    location = models.PointField(srid=9141)
    comments = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=(('Active', 'Active'), ('Inactive', 'Inactive')))
    maintenance_date = models.DateField(null=True, blank=True)
    photo = models.ImageField(upload_to='manhole_photos/', null=True, blank=True)

    class Meta:
        app_label = 'wastewater_prishtina_app'
        db_table = 'ww_manholes'

    def __str__(self):
        return self.code

class Pipe(models.Model):
    diameter = models.DecimalField(max_digits=5, decimal_places=2)
    length = models.DecimalField(max_digits=7, decimal_places=2)
    material = models.CharField(max_length=50)
    installation_date = models.DateField()
    location = models.LineStringField(srid=9141)
    condition = models.CharField(max_length=20, choices=(('Good', 'Good'), ('Fair', 'Fair'), ('Poor', 'Poor')))
    maintenance_date = models.DateField(null=True, blank=True)
    photo = models.ImageField(upload_to='pipe_photos/', null=True, blank=True)

    class Meta:
        app_label = 'wastewater_prishtina_app'
        db_table = 'ww_pipes'

    def __str__(self):
        return f"{self.diameter} - {self.length}"

class CollectorPoint(models.Model):
    name = models.CharField(max_length=100)
    location = models.PointField(srid=9141)
    capacity = models.DecimalField(max_digits=7, decimal_places=2)
    owner = models.CharField(max_length=100)
    elevation = models.DecimalField(max_digits=7, decimal_places=2)
    maintenance_notes = models.TextField(blank=True)
    photo = models.ImageField(upload_to='collector_photos/', null=True, blank=True)

    class Meta:
        app_label = 'wastewater_prishtina_app'
        db_table = 'ww_collectors'

    def __str__(self):
        return self.name

class DischargePoint(models.Model):
    name = models.CharField(max_length=100)
    location = models.PointField(srid=9141)
    max_flow_rate = models.DecimalField(max_digits=7, decimal_places=2)
    water_quality = models.CharField(max_length=50)
    permit_number = models.CharField(max_length=50)
    monitoring_frequency = models.CharField(max_length=50)
    contact_person = models.CharField(max_length=100)
    contact_email = models.EmailField()
    photo = models.ImageField(upload_to='discharge_photos/', null=True, blank=True)

    class Meta:
        app_label = 'wastewater_prishtina_app'
        db_table = 'ww_discharge_points'

    def __str__(self):
        return self.name


class WorkOrder(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    priority = models.CharField(max_length=50)
    assigned_personnel = models.ForeignKey(User, on_delete=models.CASCADE)
    due_date = models.DateField()

    def __str__(self):
        return self.title


class Task(models.Model):
    work_order = models.ForeignKey(WorkOrder, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(max_length=50)
    due_date = models.DateField()

    def __str__(self):
        return self.name


class Equipment(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    installation_date = models.DateField()
    maintenance_interval = models.IntegerField()
    last_maintenance_date = models.DateField()

    def __str__(self):
        return self.name


class MaintenanceTask(models.Model):
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    frequency = models.CharField(max_length=50)
    estimated_duration = models.DurationField()
    tools_required = models.CharField(max_length=255)
    skills_required = models.CharField(max_length=255)
    checklist = models.TextField()

    def __str__(self):
        return self.name


class WorkOrderHistory(models.Model):
    work_order = models.ForeignKey(WorkOrder, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
    date_started = models.DateTimeField()
    date_completed = models.DateTimeField()
    technician = models.ForeignKey(User, on_delete=models.CASCADE)
    notes = models.TextField()

    def __str__(self):
        return f"{self.work_order.title} - {self.status}"