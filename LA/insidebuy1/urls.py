from django.urls import path
from .views import insidebuy1, insidebuy2


urlpatterns = [
    path('insidebuy1/' ,insidebuy1, name='insidebuy1'),
    path('n/<str:name_of_prop>/', insidebuy2, name='n'),
]