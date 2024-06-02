from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from home.models import Message
from sell.models import sell
from rent.models import rent
from wanted.models import wanted
from adminpanel.models import InvestMessage, Add_admin, Add_agent
from invest.models import InvestProp
from .models import AdminPanel  # 
from django.contrib import messages
from django.shortcuts import render,redirect, redirect, get_object_or_404



def adminpanel(request):
    messages = Message.objects.all()
    sell_messages = sell.objects.all()
    rent_messages = rent.objects.all()
    wanted_messages = wanted.objects.all()
    invest_prop = InvestProp.objects.all()
    add_admin = Add_admin.objects.all()
    add_agent = Add_agent.objects.all()



    return render(request, 'adminpanel.html', {
        'messages': messages,
        'sell_messages': sell_messages,
        'rent_messages': rent_messages,
        'wanted_messages': wanted_messages,
        'invest_prop': invest_prop,
        'add_admin': add_admin,
        'emp': add_agent,
        
    })

# def adminform(request):
#     error_message = ''
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')

#         user = authenticate(username=username, password=password)

#         if user is not None:
#             if AdminPanel.objects.filter(user=user).exists():
#                 login(request, user)
#                 return redirect('adminpanel')
#             else:
#                 error_message = "You are not an admin."
#         else:
#             error_message = "Invalid username or password."

#     return render(request, 'adminform.html', {'error_message': error_message})
# def adminform(request):
#     error_message = ''
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')

#         # Authenticate the user
#         user = authenticate(username=username, password=password)

#         if user is not None:
#             # User is authenticated, check if it's an admin
#             if AdminPanel.objects.filter(username=username, password=password).exists():
#                 # Admin credentials are correct, grant access to admin panel
#                 login(request, user)
#                 return redirect('adminpanel')
#             else:
#                 # User is authenticated but not an admin
#                 error_message = "You are not an admin."
#         else:
#             # Authentication failed
#             error_message = "Invalid username or password."

#     return render(request, 'adminform.html', {'error_message': error_message})


def admin_login(request):
    error_message = ''

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            admin = AdminPanel.objects.get(username=username)
            if admin.password == password:
                # Authentication successful, redirect to admin panel
                return redirect('adminpanel')
            else:
                # Incorrect password
                error_message = 'Incorrect password'
                messages.error(request, error_message)
        except AdminPanel.DoesNotExist:
            # User does not exist
            error_message = 'You are not admin'
            messages.error(request, error_message)

    # Pass error_message to the template context
    return render(request, 'adminform.html', {'error_message': error_message})









def invest_message(request):
    if request.method == 'POST':
        name = request.POST['name']
        price = request.POST['price']
        image = request.FILES.get('image')

        invest = InvestMessage(name=name, price=price, image=image)
        invest.save()

        return redirect('adminpanel')  # Redirect to a success page or some other view

    return render(request, 'adminpanel.html')




def add_admin(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        Add_admin.objects.create(name=name)
        return redirect('adminpanel')
    return render(request, 'adminpanel.html')


def add_agent(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')
        Add_agent.objects.create(name=name, description=description)
        return redirect('adminpanel')
    return render(request, 'adminpanel.html')


def delete_employee(request, id):
    employee = get_object_or_404(Add_agent, id=id)
    if request.method == 'POST':
        employee.delete()
        return redirect('adminpanel')
    return render(request, 'delete_employee.html', {'employee':employee})



def delete_buycards(request, id):
    employee = get_object_or_404(sell, id = id)
    if request.method == 'POST':
        employee.delete()
        return redirect('adminpanel')
    return render(request, 'delete_employee.html', {'employee':employee})


def delete_rentcards(request, id):
    employee = get_object_or_404(rent, id = id)
    if request.method == 'POST':
        employee.delete()
        return redirect('adminpanel')
    return render(request, 'delete_employee.html', {'employee':employee})



def delete_messagecards(request, id):
    employee = get_object_or_404(Message, id = id)
    if request.method == 'POST':
        employee.delete()
        return redirect('adminpanel')
    return render(request, 'delete_employee.html', {'employee':employee})