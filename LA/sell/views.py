from django.shortcuts import render, redirect
from .models import sell
from sell.consts import CITIES, AREAS

def sell_view(request):
    context = {
        'cities': CITIES,
        'areas': AREAS,
    }

    if request.method == 'POST':
        # Retrieve form data from POST request
        property_action = request.POST.get('property_action')
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

        # Initialize an empty dictionary to hold error messages
        errors = {}

        # Validate form data
        if not property_action:
            errors['property_action'] = 'Property action is required.'
        if not property_type:
            errors['property_type'] = 'Property type is required.'
        if not property_subtypes:
            errors['property_subtypes'] = 'Property subtypes are required.'
        if not city:
            errors['city'] = 'City is required.'
        if not area:
            errors['area'] = 'Area is required.'
        if not size:
            errors['size'] = 'Size is required.'
        if not price:
            errors['price'] = 'Price is required.'
        if not rooms:
            errors['rooms'] = 'Number of rooms is required.'
        if not baths:
            errors['baths'] = 'Number of baths is required.'
        if not name_of_prop:
            errors['name_of_prop'] = 'Property name is required.'
        if not contact_number:
            errors['contact_number'] = 'Contact number is required.'
        if not owner_name:
            errors['owner_name'] = 'Owner name is required.'
        if not availability:
            errors['availability'] = 'Availability status is required.'
        if not images:
            errors['images'] = 'Image is required.'

        # Update context with form data
        context.update({
            'property_action': property_action,
            'property_type': property_type,
            'property_subtypes': property_subtypes,
            'city': city,
            'area': area,
            'size': size,
            'price': price,
            'rooms': rooms,
            'baths': baths,
            'name_of_prop': name_of_prop,
            'additional_details': additional_details,
            'contact_number': contact_number,
            'owner_name': owner_name,
            'availability': availability,
        })

        # If there are errors, re-render the form with error messages
        if errors:
            context['errors'] = errors
            return render(request, 'sell.html', context)

        # Save the data if no errors
        property_obj = sell(
            property_action=property_action,
            property_type=property_type,
            property_subtypes=property_subtypes,
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

        return redirect('sell')  # Redirect to admin panel after successful submission
    else:
        return render(request, 'sell.html', context)

def selladminpanel(request):
    sellmessage = sell.objects.all()
    context = {
        'sellmessage': sellmessage
    }
    return render(request, 'adminpanel.html', context)
