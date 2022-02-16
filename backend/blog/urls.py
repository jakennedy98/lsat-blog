from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from .views import BlogPostViewSet, EmailViewSet, ContactViewSet


router = DefaultRouter()

router.register('blog-post', BlogPostViewSet, basename='blog-post')
router.register('email', EmailViewSet, basename='email')
router.register('contact', ContactViewSet, basename='contact')



urlpatterns = [
     path('api/', include(router.urls)),
]