from django.shortcuts import render, redirect
from .models import Message
from django.http import HttpResponse
from sell.models import sell
from rent.models import rent
from django.http import JsonResponse

def adminpanel(request):
    message = Message.objects.all()
    sell_messages = sell.objects.all()
    context = {
        'message': message,
        'sell_messages' :sell_messages
    }
    return render(request, "adminpanel.html" , context)


def add_message(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone_number')
        message = request.POST.get('message')
        
        emp = Message.objects.create(
            name=name,
            email=email,
            phone_number=phone_number,
            message=message
        )
        emp.save()
        return redirect('home')  # Redirect to the 'home' URL pattern
        
    return render(request, 'main.html')

        
    

def home(request):
    selected_city = request.GET.get('city', 'isl')  
    sell_messages = sell.objects.filter(city=selected_city)
    rent_messages = rent.objects.filter(city=selected_city)
    
    
    context = {
        'selected_city': selected_city,
        'sell_messages': sell_messages,
        'rent_messages': rent_messages,
    }
    return render(request, 'main.html',context)

def fetch_sell_properties(request):
    city = request.GET.get('city', 'isl')
    sell_messages = sell.objects.filter(city=city)
    properties = [
        {
            "name_of_prop": prop.name_of_prop,
            "rooms": prop.rooms,
            "baths": prop.baths,
            "size": prop.size,
            "price": prop.price,
            "owner_name": prop.owner_name,
            "images": {"url": prop.images.url} if prop.images else None
        }
        for prop in sell_messages
    ]
    return JsonResponse({"properties": properties})



def fetch_rent_properties(request):
    city = request.GET.get('city', 'isl')
    rent_messages = rent.objects.filter(city=city)
    properties = [
        {
            "name_of_prop": prop.name_of_prop,
            "rooms": prop.rooms,
            "baths": prop.baths,
            "size": prop.size,
            "price": prop.price,
            "owner_name": prop.owner_name,
            "images": {"url": prop.images.url} if prop.images else None
        }
        for prop in rent_messages
    ]
 
    return JsonResponse({"properties": properties})



# def insidebuy2(request):
#     sell_messages = sell.objects.get()
#     # return render(request, "insidebuy2.html")
#     return render(request, 'insidebuy2.html', {'sell_messages': sell_messages,})

  

def insidebuy2(request, name_of_prop):
    try:
        sell_messages = sell.objects.get(name_of_prop=name_of_prop)
    except sell.DoesNotExist:
        sell_messages = None
    return render(request, 'insidebuy2.html', {'sell_messages': sell_messages})



def insiderent2(request, name_of_prop):
    try:
        rent_messages = rent.objects.get(name_of_prop = name_of_prop)
    except rent.DoesNotExist:
        rent_messages = None
    return render(request, 'insiderent2.html', {'rent_messages': rent_messages})



# def home(request):
#     sell_messages = Sell.objects.all()
#     return render(request, 'home.html', {'sell_messages': sell_messages})








def insidebuy1(request, city=None):
    if request.method == 'POST':
        city = request.POST.get('city')
        if city:
            return redirect('insidebuy1', city=city)
    
    sell_messages = sell.objects.filter(city=city) if city else []
    city = city if city else "Unknown City"
    return render(request, 'insidebuy1.html', {'sell_messages': sell_messages, 'city_name': city})



def insiderent1(request, city=None):
    if request.method == 'POST':
        city = request.POST.get('city')
        if city:
            return redirect('insiderent1', city=city)
    
    rent_messages = rent.objects.filter(city=city) if city else []
    city = city if city else "Unknown City"

    return render(request, 'insiderent1.html', {'rent_messages': rent_messages ,  'city_name':city})