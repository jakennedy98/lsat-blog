from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.utils.text import slugify

# Create your models here.
class UserManager(BaseUserManager):

    def create_user(self, email, username, first_name, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, username = username, first_name = first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, username, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True')


        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, username, first_name, password, **other_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length = 25, unique = True)
    first_name = models.CharField(max_length = 150, blank=True)
    last_name = models.CharField(max_length = 150, blank=True)
    date_joined = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name']

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.
        """
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        """Return the short name for the user."""
        return self.first_name

    def __str__(self):
        return self.username

class BlogPost(models.Model):
    title = models.CharField(max_length = 75, null=True, blank=True)
    text = RichTextUploadingField()
    date_published = models.DateTimeField(default= timezone.now)
    slug = models.SlugField(unique=True, editable=False)
    thumbnail = models.ImageField(blank=True, null=True)
    description = RichTextUploadingField()

    def __str__(self): 
        return self.title

    def save(self, *args, **kwargs):  # new
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)
    
    def delete(self, using=None, keep_parents=False):
        self.thumbnail.delete()
        super().delete()

class Email(models.Model):
    email = models.CharField(max_length = 75, null=True, blank=True)

    def __str__(self): 
        return self.email

class Contact(models.Model):
    first_name = models.CharField(max_length = 75, null=True, blank=True)
    last_name = models.CharField(max_length = 75, null=True, blank=True)
    email = models.CharField(max_length = 75, null=True, blank=True)
    message = models.CharField(max_length = 7500, null=True, blank=True)

    def __str__(self): 
        return self.first_name + " " + self.last_name

 