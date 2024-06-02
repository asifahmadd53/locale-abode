from django.shortcuts import render,redirect
from adminpanel.models import InvestMessage
from .models import InvestProp
# Create your views here.


def invest(request):
    invest = InvestMessage.objects.all()
    return render(request, 'invest.html', {'invest_message': invest})



def invest_prop(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone')
        city = request.POST.get('city')
        message = request.POST.get('message')
        
        emp = InvestProp.objects.create(
            name=name,
            email=email,
            phone_number=phone_number,
            message=message,
            city = city
        )
        emp.save()
        return redirect('invest')  # Redirect to the 'home' URL pattern
        
    return render(request, 'invest.html')