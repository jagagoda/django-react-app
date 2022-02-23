from django.db import models

class Weather(models.Model):
  name = models.CharField(max_length = 255)
  temperature = models.DecimalField(max_digits=255, decimal_places=4)
  pressure = models.DecimalField(max_digits=255, decimal_places=4)
  humidity = models.DecimalField(max_digits=255, decimal_places=4)
  description = models.CharField(max_length=250)
  time = models.DecimalField(max_digits=255, decimal_places=4)
  wind = models.CharField(max_length=250)
  icon = models.CharField(max_length=250)
