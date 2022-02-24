import urllib.request
import json
from django.http import JsonResponse
from django.http import HttpResponse
import datetime
# from forecastApp.models import Weather


def index(request):

    if request.method == 'GET':
        city = request.GET.get('city', None)

        if not city:
            return HttpResponse(status=422)

        source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q=' +
                                        city + '&units=metric&appid=60ab28a4f4899ef5af004f1e7c0d2ca8').read()
        # source = urllib.request.urlopen('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&&exclude=hourly,minutely&units=metric&appid=60ab28a4f4899ef5af004f1e7c0d2ca8').read()
        list_of_data = json.loads(source)

        data = {
            "country": str(list_of_data['sys']['country']),
            "coordinate": str(list_of_data['coord']['lon']) + ', '
            + str(list_of_data['coord']['lat']),
            "temp": str(list_of_data['main']['temp']) + ' °C',
            "pressure": str(list_of_data['main']['pressure']) + ' hPa',
            "humidity": str(list_of_data['main']['humidity']) + ' %',
            'main': str(list_of_data['weather'][0]['main']),
            'description': str(list_of_data['weather'][0]['description']),
            'icon': list_of_data['weather'][0]['icon'],
            'name': str(list_of_data['name']),
            'wind': str(list_of_data['wind']['speed']) + ' km/h',
            'time': datetime.datetime.fromtimestamp(float(list_of_data['dt']))
        }
        # pressure = float(list_of_data['main']['pressure']),
        # humidity = float(list_of_data['main']['humidity']),
        # print(humidity)
        # description= str(list_of_data['weather'][0]['description']),
        # icon= list_of_data['weather'][0]['icon'],
        # name= str(list_of_data['name']),
        # wind= float(list_of_data['wind']['speed']),
        # time= float(list_of_data['dt'])
        # record = Weather.objects.create(temperature=temperature, pressure=pressure, humidity=humidity, icon=icon, description=description, name=name, wind=wind, time=time)
        # record.save()

    else:
        return HttpResponse(status=405)

    return JsonResponse(data)
