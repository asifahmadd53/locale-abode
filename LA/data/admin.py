from django.contrib import admin

# Register your models here.

from .models import City ,Area, PropertyType 

# Register your models here.

class CityAdmin(admin.ModelAdmin):
    list_display=('city_name',)

admin.site.register(City,CityAdmin)


class AreaAdmin(admin.ModelAdmin):
    list_display=('area_name','city_name',)

admin.site.register(Area,AreaAdmin)


class PropertyTypeAdmin(admin.ModelAdmin):
    list_display=('property_name',)

admin.site.register(PropertyType,PropertyTypeAdmin)