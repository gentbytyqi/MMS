# Generated by Django 4.2.1 on 2023-06-02 00:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wastewater_prishtina_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='collectorpoint',
            table='ww_collectors',
        ),
        migrations.AlterModelTable(
            name='dischargepoint',
            table='ww_discharge_points',
        ),
        migrations.AlterModelTable(
            name='manhole',
            table='ww_manholes',
        ),
        migrations.AlterModelTable(
            name='pipe',
            table='ww_pipes',
        ),
    ]
