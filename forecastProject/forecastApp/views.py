import urllib.request
import json
from django.http import JsonResponse
from django.http import HttpResponse

def index(request):

    if request.method == 'GET':
        city = request.GET.get('city', None)
        # lon = request.GET.get('lon', None)
        # lat = request.GET.get('lat', None)

        if not city:
            return HttpResponse(status=422)

        source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q=' +
                                        city + '&units=metric&appid=60ab28a4f4899ef5af004f1e7c0d2ca8').read()
        # source = urllib.request.urlopen('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&&exclude=hourly,minutely&units=metric&appid=60ab28a4f4899ef5af004f1e7c0d2ca8').read()
        list_of_data = json.loads(source)

        data = {
            "country_code": str(list_of_data['sys']['country']),
            "coordinate": str(list_of_data['coord']['lon']) + ', '
            + str(list_of_data['coord']['lat']),
            "temp": str(list_of_data['main']['temp']) + ' °C',
            "pressure": str(list_of_data['main']['pressure']) + ' hPa',
            "humidity": str(list_of_data['main']['humidity']) + ' %',
            'main': str(list_of_data['weather'][0]['main']),
            'description': str(list_of_data['weather'][0]['description']),
            'icon': list_of_data['weather'][0]['icon'],
            # 'name': str(list_of_data['city']['name']),
            # 'rain': str(list_of_data['rain'])
        }

    else:
        return HttpResponse(status=405)

    return JsonResponse(data);