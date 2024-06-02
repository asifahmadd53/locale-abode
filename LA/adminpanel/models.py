from django.db import models










class InvestMessage(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    image = models.ImageField(upload_to='', null=True, blank=True)


    def __str__(self):
        return self.name




class Add_admin(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    



class Add_agent(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.name




# class AdminPanel(models.Model):
#     username = models.CharField(max_length=100)
#     password = models.CharField(max_length=100)

#     def __str__(self):
#         return self.username

class AdminPanel(models.Model):
    username  = models.CharField(max_length=100)
    password  = models.CharField(max_length=100)