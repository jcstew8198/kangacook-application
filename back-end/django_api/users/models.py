from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=120)
    password = models.CharField(max_length=20)
    loggedIn = models.BooleanField(default=False)

    def _str_(self):
        return self.username