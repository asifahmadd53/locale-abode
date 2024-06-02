from django.shortcuts import render, redirect
from django.http import HttpResponse
from wanted.models import wanted
from sell.consts import CITIES, AREAS

def wanted_view(request):
    context = {
        'cities': CITIES,
        'areas': AREAS,
    }
    

    if request.method == 'POST':
        # Extract data from the request
        property_action = request.POST.get('property_action')
        property_type = request.POST.get('property_type')
        property_subtypes = request.POST.get('property_subtypes')
        city_name = request.POST.get('city')
        area_name = request.POST.get('area')
        name = request.POST.get('name')
        phone_number = request.POST.get('phone_number')
        additional_details = request.POST.get('additional_details')

        # Create a new instance of the wanted model and save it
        new_wanted = wanted.objects.create(
            property_action=property_action,
            property_type=property_type,
            property_subtypes=property_subtypes,
            city_name=city_name,
            area_name=area_name,
            name=name,
            phone_number=phone_number,
            additional_details=additional_details
        )

        new_wanted.save()
        context['show_popup'] = True
        return render(request, 'wanted.html', context)
    else:
        return render(request, 'wanted.html', context)
