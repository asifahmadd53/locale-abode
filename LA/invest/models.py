from django.db import models


class InvestProp(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    message = models.TextField()



    def __str__(self):
        return self.name