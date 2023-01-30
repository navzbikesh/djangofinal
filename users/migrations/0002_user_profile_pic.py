# Generated by Django 3.2.9 on 2023-01-17 18:17

from django.db import migrations, models
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_pic',
            field=models.ImageField(blank=True, null=True, upload_to=users.models.user_profile_directory_path, verbose_name='Profile Picture'),
        ),
    ]
