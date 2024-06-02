from django.shortcuts import render
from rent.models import rent
# Create your views here.



def insiderent2(request):
    rent_messages = rent.objects.all()
    return render(request, 'insiderent2.html', {'rent_messages': rent_messages})

