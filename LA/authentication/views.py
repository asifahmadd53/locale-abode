# from django.shortcuts import render, redirect,HttpResponse
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate, login, logout
# from django.contrib.auth.decorators import login_required

# def signupPage(request):
#     if request.method == 'POST': 
#         uname = request.POST.get('username')
#         email = request.POST.get('email')
#         password = request.POST.get('password')

#         # Check if username or email already exists
#         if User.objects.filter(username=uname).exists():
#             return render(request, 'signUp.html', {'username_error': True})
#         if User.objects.filter(email=email).exists():
#             return render(request, 'signUp.html', {'email_error': True})

#         # If username and email are unique, create user
#         my_user = User.objects.create_user(uname, email, password)
#         my_user.save()

#         return redirect('login')
    
#     return render(request, 'signup.html')



# def loginPage(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return redirect('home')
#         else:
#             user_exists = User.objects.filter(username=username).exists()
            

#     return render(request, 'login.html')



# @login_required
# def logoutUser(request):
#     logout(request)
#     return redirect('main')




# def signupPage(request):
#     if request.method == 'POST': 
#         uname = request.POST.get('username')
#         email = request.POST.get('email')
#         password = request.POST.get('password')
        
#         if User.objects.filter(username=uname).exists():
#             return render(request, 'signup.html', {'username_error': True})
#         if User.objects.filter(email=email).exists():
#             return render(request, 'signup.html', {'email_error': True})
    
#         my_user = User.objects.create_user(uname, email, password)
#         my_user.save()
#         return redirect('login')
    
#     return render(request, 'signup.html')




# def loginPage(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return redirect('main')  # Ensure 'main' is the name of the URL pattern for main.html
#         else:
#             return HttpResponse("Username or password is incorrect!")
#     return render(request, 'login.html')



# from django.shortcuts import render,HttpResponse,redirect
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate,login,logout
# from django.contrib.auth.decorators import login_required

# # Create your views here.

# def signupPage(request):
#     if request.method == 'POST': 
#         uname = request.POST.get('username')
#         email = request.POST.get('email')
#         password = request.POST.get('password')

#         # Check if username or email already exists
#         if User.objects.filter(username=uname).exists():
#             return render(request, 'signUp.html', {'username_error': True})
#         if User.objects.filter(email=email).exists():
#             return render(request, 'signUp.html', {'email_error': True})

#         # If username and email are unique, create user
#         my_user = User.objects.create_user(uname, email, password)
#         my_user.save()

#         return redirect('login')
    
#     return render(request, 'signUp.html')



# def loginPage(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return redirect('home')
#         else:
#             user_exists = User.objects.filter(username=username).exists()
#             if user_exists:
#                 error_message = "Password is incorrect!!"
#             else:
#                 error_message = "Username does not exist!!"
#             return render(request, 'login.html', {'error_message': error_message})
#     return render(request, 'login.html')



from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User



def adminpanel(request):
   return render (request, 'adminpanel.html')


def signupPage(request):
    if request.method == 'POST': 
        uname = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Check if username or email already exists
        if User.objects.filter(username=uname).exists():
            return render(request, 'signUp.html', {'username_error': True})
        if User.objects.filter(email=email).exists():
            return render(request, 'signUp.html', {'email_error': True})

        # If username and email are unique, create user
        my_user = User.objects.create_user(uname, email, password)
        my_user.save()

        return redirect('login')
    
    return render(request, 'signUp.html')

def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            user_exists = User.objects.filter(username=username).exists()
            if user_exists:
                error_message = "Password is incorrect!!"
            else:
                error_message = "Username does not exist!!"
            return render(request, 'login.html', {'error_message': error_message})
    return render(request, 'login.html')


def logoutUser(request):
    logout(request)
    return redirect('home')
