from django.urls import path
from .views import rent,insiderent2,fetch_properties5,fetch_properties6,fetch_properties7,fetch_properties8,fetch_properties9

urlpatterns = [
    path('' , rent, name='rent'),
    path('rent/<str:name_of_prop>/', insiderent2, name='rent'),
    path('fetch_properties5/', fetch_properties5, name='fetch_properties5'),
    path('fetch_properties6/', fetch_properties6, name='fetch_properties6'),
    path('fetch_properties7/', fetch_properties7, name='fetch_properties7'),
    path('fetch_properties8/', fetch_properties8, name='fetch_properties8'),
    path('fetch_properties9/', fetch_properties9, name='fetch_properties9'),
]