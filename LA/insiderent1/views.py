from django.shortcuts import render
from rent.models import rent

# Create your views here.
def insiderent1(request):
    city = request.GET.get('city')
    rent_messages = rent.objects.filter(city=city)
    city_name = city if city else "Unknown City"
   
    return render(request, 'insiderent1.html', {'rent_messages':rent_messages, 'city_name': city_name})



def insiderent2(request, name_of_prop):
    try:
        rent_messages = rent.objects.get(name_of_prop = name_of_prop)
    except rent.DoesNotExist:
        rent_messages = None
    return render(request, 'insiderent2.html', {'rent_messages': rent_messages})