from django.shortcuts import render
from rent.models import rent
from django.http import JsonResponse



def rentproperty(request):
 
    selected_prop = request.GET.get('property_type', 'Residential')  
    rent_messages = rent.objects.filter(property_type = selected_prop )
   

    context = {
        'selected_prop ':  selected_prop ,
        'rent_messages': rent_messages,   
    }

    return render(request, 'rentproperty.html',context )



def insiderent2(request, name_of_prop):
    try:
        rent_messages = rent.objects.get(name_of_prop = name_of_prop)
    except rent.DoesNotExist:
        rent_messages = None
    return render(request, 'insiderent2.html', {'rent_messages': rent_messages})






def fetch_properties5(request):
   
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = rent.objects.filter(property_type=selected_prop  , city ='isl')
    
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



def fetch_properties6(request):
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = rent.objects.filter(property_type=selected_prop , city ='lhr')
    
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



def fetch_properties7(request):
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = rent.objects.filter(property_type=selected_prop , city ='swl')
    
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



def fetch_properties8(request):
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = rent.objects.filter(property_type=selected_prop , city ='psh')
    
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







def fetch_properties9(request):
    selected_prop = request.GET.get('property_type', 'Residential')  
    sell_messages = rent.objects.filter(property_type=selected_prop , city ='kar')
    
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
    
    return JsonResponse({'properties':properties})
