# Generated by Django 5.0.4 on 2024-05-22 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0002_investmessage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Add_admin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
    ]
