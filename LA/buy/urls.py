from django.urls import path
from .views import buy, insidebuy2,fetch_properties,fetch_properties1,fetch_properties2,fetch_properties3,fetch_properties4

urlpatterns = [
    path('buy/' ,buy, name='buy'),
    path('n/<str:name_of_prop>/', insidebuy2, name='n'),
    path('fetch_properties/', fetch_properties, name='fetch_properties'),
    path('fetch_properties1/', fetch_properties1, name='fetch_properties1'),
    path('fetch_properties2/', fetch_properties2, name='fetch_properties2'),
    path('fetch_properties3/', fetch_properties3, name='fetch_properties3'),
    path('fetch_properties4/', fetch_properties4, name='fetch_properties4'),
]
