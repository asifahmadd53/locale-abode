# Generated by Django 5.0.4 on 2024-05-11 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='sell',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('property_action', models.CharField(max_length=10)),
                ('property_type', models.CharField(max_length=20)),
                ('property_subtypes', models.CharField(max_length=20, null=True)),
                ('city', models.CharField(max_length=100)),
                ('area', models.CharField(max_length=100)),
                ('size', models.CharField(max_length=50)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('rooms', models.IntegerField()),
                ('baths', models.IntegerField()),
                ('name_of_prop', models.CharField(max_length=100)),
                ('additional_details', models.TextField()),
                ('contact_number', models.CharField(max_length=15)),
                ('owner_name', models.CharField(max_length=100)),
                ('availability', models.CharField(max_length=20)),
                ('images', models.ImageField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]