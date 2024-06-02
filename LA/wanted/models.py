from django.db import models
from .consts import CITIES,AREAS


class wanted(models.Model):
    property_action = models.CharField(max_length=10,default=None)
    property_type = models.CharField(max_length=20,default=None)
    property_subtypes = models.CharField(max_length=20,default=None)
    city_name = models.CharField(max_length=100, choices=CITIES)
    area_name = models.CharField(max_length=100, choices=AREAS)
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    additional_details = models.TextField()