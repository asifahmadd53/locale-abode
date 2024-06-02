from django.shortcuts import render
from sell.models import sell
from django.http import JsonResponse



def buy(request):
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = sell.objects.filter(property_type = selected_prop )
   

    context = {
        'selected_prop ':  selected_prop ,
        'sell_messages': sell_messages,   
    }
    
   
    return render(request, 'buy.html',context )



def insidebuy2(request, name_of_prop):
    try:
        sell_messages = sell.objects.get(name_of_prop=name_of_prop)
    except sell.DoesNotExist:
        sell_messages = None
    return render(request, 'insidebuy2.html', {'sell_messages': sell_messages})







def fetch_properties(request):
   
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = sell.objects.filter(property_type=selected_prop  , city ='isl')
    
    properties = []
    for message in sell_messages:
        property_data = {
            'name_of_prop': message.name_of_prop,
            'rooms': message.rooms,
            'baths': message.baths,
            'size': message.size,
            'price': message.price,
            'owner_name': message.owner_name,
            'images_url': message.images.url if message.images else None
        }
        properties.append(property_data)
    
    return JsonResponse({'properties': properties})



def fetch_properties1(request):
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = sell.objects.filter(property_type=selected_prop , city ='lhr')
    
    properties = []
    for message in sell_messages:
        property_data = {
            'name_of_prop': message.name_of_prop,
            'rooms': message.rooms,
            'baths': message.baths,
            'size': message.size,
            'price': message.price,
            'owner_name': message.owner_name,
            'images_url': message.images.url if message.images else None
        }
        properties.append(property_data)
    
    return JsonResponse({'properties': properties})



def fetch_properties2(request):
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = sell.objects.filter(property_type=selected_prop , city ='swl')
    
    properties = []
    for message in sell_messages:
        property_data = {
            'name_of_prop': message.name_of_prop,
            'rooms': message.rooms,
            'baths': message.baths,
            'size': message.size,
            'price': message.price,
            'owner_name': message.owner_name,
            'images_url': message.images.url if message.images else None
        }
        properties.append(property_data)
    
    return JsonResponse({'properties': properties})



def fetch_properties3(request):
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = sell.objects.filter(property_type=selected_prop , city ='psh')
    
    properties = []
    for message in sell_messages:
        property_data = {
            'name_of_prop': message.name_of_prop,
            'rooms': message.rooms,
            'baths': message.baths,
            'size': message.size,
            'price': message.price,
            'owner_name': message.owner_name,
            'images_url': message.images.url if message.images else None
        }
        properties.append(property_data)
    
    return JsonResponse({'properties': properties})




def fetch_properties4(request):
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = sell.objects.filter(property_type=selected_prop , city ='kar')
    
    properties = []
    for message in sell_messages:
        property_data = {
            'name_of_prop': message.name_of_prop,
            'rooms': message.rooms,
            'baths': message.baths,
            'size': message.size,
            'price': message.price,
            'owner_name': message.owner_name,
            'images_url': message.images.url if message.images else None
        }
        properties.append(property_data)
    
    return JsonResponse({"properties":properties})

