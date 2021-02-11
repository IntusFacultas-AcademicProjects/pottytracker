from django.db import models
from django.utils import timezone
# Create your models here.


class Record(models.Model):
    Y = "Y"
    N = "N"
    NONE = "None"
    SELECTION_OPTIONS = (
        (Y, "Yes"),
        (N, "No"),
        (N, "")
    )
    pee = models.CharField("Went Pee", blank=True, max_length=12,
                           null=True, choices=SELECTION_OPTIONS)
    poo = models.CharField("Went Poo", blank=True, max_length=12,
                           null=True, choices=SELECTION_OPTIONS)
    sleep = models.CharField("Went to Sleep", blank=True, max_length=12,
                             null=True, choices=SELECTION_OPTIONS)
    awoke = models.CharField("Woke Up", blank=True, max_length=12,
                             null=True, choices=SELECTION_OPTIONS)
    accident = models.CharField("Accident", blank=True, max_length=12,
                                null=True, choices=SELECTION_OPTIONS)
    datetime = models.DateTimeField("Datetime", blank=True, null=True)
