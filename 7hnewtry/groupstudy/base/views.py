from django.http import HttpResponse
from django.shortcuts import render
from sympy import content
from . import views

# Create your views here.
rooms = [
    
    {'id':1 , 'name': 'lets learn python' },
    {'id':2 ,'name': 'design with me'},
    {'id':3 ,'name': 'frontend developers '},
]

def home(request,):
    context={'rooms':rooms}
    return render(request,'base/home.html',context)


def room(request,pk):
    return render(request,'base/room.html')
