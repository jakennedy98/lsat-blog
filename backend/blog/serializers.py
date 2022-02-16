from rest_framework.serializers import Serializer, ModelSerializer, PrimaryKeyRelatedField
from .models import BlogPost, Email, Contact
from rest_framework.authtoken.views import Token
from rest_framework import serializers


class BlogPostSerializer(ModelSerializer):

    class Meta:
        model = BlogPost
        fields = '__all__'
        ordering = ['lesson_number']

class EmailSerializer(ModelSerializer):

    class Meta:
        model = Email
        fields = '__all__'

class ContactSerializer(ModelSerializer):

    class Meta:
        model = Contact
        fields = '__all__'
