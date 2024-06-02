from django.shortcuts import render
from sell.models import sell
# Create your views here.

def insidebuy2(request):
    sell_messages = sell.objects.all()
    # return render(request, "insidebuy2.html")
    return render(request, 'insidebuy2.html', {'sell_messages': sell_messages,})

