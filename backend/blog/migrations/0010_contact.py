# Generated by Django 4.0.2 on 2022-02-13 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=75, null=True)),
                ('last_name', models.CharField(blank=True, max_length=75, null=True)),
                ('email', models.CharField(blank=True, max_length=75, null=True)),
                ('message', models.CharField(blank=True, max_length=7500, null=True)),
            ],
        ),
    ]
