from django.shortcuts import render
from sell.models import sell

# Create your views here.
def insidebuy1(request):

    city = request.GET.get('city')

    sell_messages = sell.objects.filter(city=city)
    city_name = city if city else "Unknown City"

    return render(request,'insidebuy1.html',{'sell_messages':sell_messages,'city_name':city_name})



def insidebuy2(request, name_of_prop):
    try:
        sell_messages = sell.objects.get(name_of_prop=name_of_prop)
    except sell.DoesNotExist:
        sell_messages = None
    return render(request, 'insidebuy2.html', {'sell_messages': sell_messages})

