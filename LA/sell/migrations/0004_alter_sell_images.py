# Generated by Django 5.0.4 on 2024-05-13 05:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sell', '0003_alter_sell_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sell',
            name='images',
            field=models.ImageField(blank=True, null=True, upload_to='media/media/uploaded_media/'),
        ),
    ]
