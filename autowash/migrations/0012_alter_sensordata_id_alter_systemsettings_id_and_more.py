# Generated by Django 5.0.7 on 2024-08-05 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autowash', '0011_alter_systemstatus_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sensordata',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='systemsettings',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='systemstatus',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
