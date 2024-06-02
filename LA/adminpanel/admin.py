from django.contrib import admin
from .models import InvestMessage,Add_admin,Add_agent,AdminPanel
# Register your models here.
# from . models import AdminPanel

# class Admin_Panel(admin.ModelAdmin):
#     list_display = ('username','password')
# Register your models here.

# admin.site.register(AdminPanel)

admin.site.register(AdminPanel)

admin.site.register(InvestMessage)
admin.site.register(Add_admin)
admin.site.register(Add_agent)