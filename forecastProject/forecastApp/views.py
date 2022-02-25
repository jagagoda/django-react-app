import urllib.request
import json
from django.http import JsonResponse
from django.http import HttpResponse
import datetime
from forecastApp.models import Weather
from django.core import serializers
import time as timeModule

def index(request):

    if request.method == 'GET':
        city = request.GET.get('city', None)

        if not city:
            return HttpResponse(status=422)

        before_time = timeModule.time() - 3 * 60 * 60

        data = Weather.objects.filter(name__icontains=city).filter(time__gte=before_time)

        if data.count() < 1:
            source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q=' +
                                            city + '&units=metric&appid=60ab28a4f4899ef5af004f1e7c0d2ca8').read()
            # source = urllib.request.urlopen('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&&exclude=hourly,minutely&units=metric&appid=60ab28a4f4899ef5af004f1e7c0d2ca8').read()
            list_of_data = json.loads(source)

            pressure = float(list_of_data['main']['pressure'])
            temperature = str(list_of_data['main']['temp'])
            humidity = float(list_of_data['main']['humidity'])
            description= str(list_of_data['weather'][0]['description'])
            icon= list_of_data['weather'][0]['icon']
            name= str(list_of_data['name'])
            wind= float(list_of_data['wind']['speed'])
            time= float(list_of_data['dt'])
            record = Weather.objects.create(temperature=temperature, pressure=pressure, humidity=humidity, icon=icon, description=description, name=name, wind=wind, time=time)
            record.save()

        data = Weather.objects.filter(name__icontains=city).order_by('-time')[:1]
        data = serializers.serialize('json', data)

        return JsonResponse(data, safe=False)

    else:
      return HttpResponse(status=405)
