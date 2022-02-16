from .models import BlogPost, Email, Contact
from rest_framework import viewsets
from rest_framework.parsers import FormParser, MultiPartParser
from .serializers import BlogPostSerializer, EmailSerializer, ContactSerializer
from rest_framework import filters

from django.shortcuts import render


class BlogPostViewSet(viewsets.ModelViewSet):
    #permission_classes = [IsAuthenticated]
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
  #  authentication_classes = (TokenAuthentication,)
    parser_classes = [MultiPartParser, FormParser]
    http_method_names = ['get']
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'

class EmailViewSet(viewsets.ModelViewSet):
    #permission_classes = [IsAuthenticated]
    queryset = Email.objects.all()
    serializer_class = EmailSerializer
  #  authentication_classes = (TokenAuthentication,)

class ContactViewSet(viewsets.ModelViewSet):
    #permission_classes = [IsAuthenticated]
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
  #  authentication_classes = (TokenAuthentication,)
