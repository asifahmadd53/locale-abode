from django.db import models

# Create your models here.
from django.db import models
from .consts import CITIES,CITY_AREAS


class Residential(models.Model):
    residential_name = models.CharField(max_length=200,)
    

class Plot(models.Model):
    plot_name = models.CharField(max_length=200,)


class Commercial(models.Model):
    commercial_name = models.CharField(max_length=200,)        

class PropertyType(models.Model):
     property_name = models.CharField(max_length=200,)
     residential_name = models.CharField(max_length=200,)
     plot_name = models.CharField(max_length=200,)
     commercial_name =  models.CharField(max_length=200,)


    
class City(models.Model):
    city_name = models.CharField(max_length=200,choices=CITIES)

    def __str__(self):
        return dict(CITIES)[self.city_code]


class Area(models.Model):
    area_name = models.CharField(max_length=200)
    city_name = models.ForeignKey(City, on_delete=models.CASCADE,default=None)
   # city_code = models.CharField(max_length=3, choices=CITIES,default=None)

    
    def __str__(self):
        return self.area_name
