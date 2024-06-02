"""
URL configuration for LA project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from home import views as home_views
from invest import views as invest_views
from sell import views as sell_views
from wanted import views as wanted_views
from buy import views as buy_views
from rentproperty import views as rentproperty_views
from insidebuy1 import views as insidebuy1_views
from insidebuy2 import views as insidebuy2_views
from adminpanel import views as admin_views
from authentication import views as authentication_view
from rent import views as rent_views
from django.conf.urls.static import static
from insiderent1 import views as insiderent1_views
from insiderent2 import views as insiderent2_views
# from adminpanel.views import index


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_views.home, name="home"),
    path('home/', home_views.home, name="home"),
    path('invest/', invest_views.invest, name="invest"),
    path('sell/',sell_views.sell_view, name="sell"),
    # path('wanted/', wanted_veiws.wanted, name= "wanted"),
    path('wanted/', wanted_views.wanted_view, name="wanted"),
    path('rentproperty/', rentproperty_views.rentproperty , name= "rentproperty"),
    path('insidebuy1/' ,  insidebuy1_views.insidebuy1, name="insidebuy1"),
    path('insidebuy2/' , insidebuy2_views.insidebuy2, name="insidebuy2"),
    path('admin_login/', admin_views.admin_login, name='admin_login'),
    path("signup/", authentication_view.signupPage, name="signup"),
    path("login/", authentication_view.loginPage, name="login"),
    path('logout/', authentication_view.logoutUser, name='logout'),
    path("adminpanel/" ,admin_views.adminpanel, name="adminpanel"),
    # path ("adminpanel/", index, name = "adminpanel"),
    path('add_message/', home_views.add_message, name='add_message'),
    path('invest_message/', admin_views.invest_message, name='invest_message'),
    path('add_admin/', admin_views.add_admin, name='add_admin'),
    path('add_agent/', admin_views.add_agent, name='add_agent'),
    path('invest_prop/', invest_views.invest_prop, name='invest_prop'),
    path('rent/',rent_views.rent_view ,name= "rent"),
    path('insiderent1/', insiderent1_views.insiderent1, name= 'insiderent1'),
    path('insiderent2/', insiderent2_views.insiderent2, name= 'insiderent2'),
    path('', include('home.urls')),
    path('', include('buy.urls')),
    path('', include('insidebuy1.urls')),
    path('', include('rentproperty.urls')),
    path('', include('insiderent1.urls')),
    path('accounts/', include('allauth.urls')),
    path('delete/<int:id>/', admin_views.delete_employee, name='delete'),
    path('delete_sellcards/<int:id>/', admin_views.delete_buycards, name='delete_sellcards'),
    path('delete_rentcards/<int:id>/', admin_views.delete_rentcards, name='delete_rentcards'),
    path('delete_messagecards/<int:id>/', admin_views.delete_messagecards, name='delete_messagecards'),
    

    # path('adminpanel/',admin_views.selladminpanel, name="adminpanel"),

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

