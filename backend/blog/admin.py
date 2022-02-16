from django.contrib import admin
from .models import BlogPost, CustomUser, Email, Contact

# Register your models here.
class AuthorAdmin(admin.ModelAdmin):
    exclude = ('slug',)


admin.site.register(BlogPost)
admin.site.register(CustomUser)
admin.site.register(Email)
admin.site.register(Contact)