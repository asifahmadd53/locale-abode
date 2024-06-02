from django.shortcuts import render,redirect
from django.http import HttpResponse
from sell.consts import CITIES,AREAS

from django.shortcuts import render
from .models import rent

from sell.consts import CITIES, AREAS


def rent_view(request):
    context = {
        'cities': CITIES,
        'areas': AREAS,
    }

    if request.method == 'POST':
        # Retrieve form data from POST request
        property_type = request.POST.get('property_type')
        property_subtypes = request.POST.get('property_subtypes')
        city = request.POST.get('city')
        area = request.POST.get('area')
        size = request.POST.get('size')
        price = request.POST.get('price')
        rooms = request.POST.get('rooms')
        baths = request.POST.get('baths')
        name_of_prop = request.POST.get('name_of_prop')
        additional_details = request.POST.get('additional_details')
        contact_number = request.POST.get('contact_number')
        owner_name = request.POST.get('owner_name')
        availability = request.POST.get('availability')
        images = request.FILES.get('images')

        property_obj = rent(
            
            property_type=property_type,
            property_subtypes =  property_subtypes,
            city=city,
            area=area,
            size=size,
            price=price,
            rooms=rooms,
            baths=baths,
            name_of_prop=name_of_prop,
            additional_details=additional_details,
            contact_number=contact_number,
            owner_name=owner_name,
            availability=availability,
            images=images
        )
    
        property_obj.save()


        return redirect('rent')  
    else:
        return render(request, 'rent.html',context)


def rentadminpanel(request):
    rentmessage = rent.objects.all()
    context = {
        'sellmessage': rentmessage
    }
    return render(request, 'adminpanel.html', context)









