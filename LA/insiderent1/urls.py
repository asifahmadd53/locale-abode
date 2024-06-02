from django.urls import path
from .views import insiderent1, insiderent2
urlpatterns = [
    path('' , insiderent1, name='home'),
    path('rent/<str:name_of_prop>/', insiderent2, name='rent'),
]