from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', obtain_auth_token),
    path('', include('blog.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
