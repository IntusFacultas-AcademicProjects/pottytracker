from django.db import models
from django.utils import timezone
# Create your models here.


class Record(models.Model):
    pee = models.BooleanField("Went Pee", default=False)
    poo = models.BooleanField("Went Poo", default=False)
    sleep = models.BooleanField("Went to Sleep", default=False)
    awoke = models.BooleanField("Woke Up", default=False)
    accident = models.BooleanField("Accident", default=False)
    datetime = models.DateTimeField("Datetime", blank=True, null=True)
