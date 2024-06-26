# Generated by Django 5.0.4 on 2024-05-31 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0007_rename_image_investmessage_images'),
    ]

    operations = [
        migrations.RenameField(
            model_name='investmessage',
            old_name='images',
            new_name='image',
        ),
        migrations.AlterField(
            model_name='investmessage',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]
