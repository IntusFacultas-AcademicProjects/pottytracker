from django.db import models
from django.utils import timezone
# Create your models here.


class Record(models.Model):
    pee = models.BooleanField("Went Pee", default=False)
    poo = models.BooleanField("Went Poo", default=False)
    diarrhea = models.BooleanField("Had Diarrhead", default=False)
    sleep = models.BooleanField("Went to Sleep", default=False)
    awoke = models.BooleanField("Woke Up", default=False)
    accident = models.BooleanField("Accident", default=False)
    datetime = models.DateTimeField("Datetime", blank=True, null=True)

    def __str__(self):
        formatted_datetime = self.datetime.strftime('%Y-%m-%d %H:%M')
        to_string = f"{formatted_datetime} "
        actions = []
        if self.pee:
            actions.append("Peed")
        if self.poo:
            actions.append("Pood")
        if self.diarrhea:
            actions.append("Diarrhea")
        if self.sleep:
            actions.append("Slept")
        if self.awoke:
            actions.append("Awoke")
        if self.accident:
            actions.append("[ACCIDENT]")
        return to_string + ", ".join(actions)
