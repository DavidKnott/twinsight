from django.shortcuts import render
from django.template.context import RequestContext

def home(request):
  context = {'user': request.user}
  return render(request, 'home.html', context)