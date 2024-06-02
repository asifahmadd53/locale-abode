from django.urls import path
from .views import home, insidebuy2,insiderent2
from .views  import insidebuy1 # Import views from the current app (insidebuy1)
from .views  import insiderent1,fetch_rent_properties,fetch_sell_properties

urlpatterns = [
    path('' , home, name='home'),
    path('n/<str:name_of_prop>/', insidebuy2, name='n'),
    path('rent/<str:name_of_prop>/', insiderent2, name='rent'),
    path('insidebuy1/<str:city>/', insidebuy1  , name='insidebuy1'),
    path('insiderent1/<str:city>/', insiderent1  , name='insiderent1'),
    path('fetch_sell_properties/', fetch_sell_properties, name='fetch_sell_properties'),
    path('fetch_rent_properties/', fetch_rent_properties, name='fetch_rent_properties'),
]

