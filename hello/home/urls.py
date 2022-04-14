from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [

    path("",views.index,name='home'),
    path("about",views.about,name='about'),
    path("services",views.services,name='services'),
    path("contact",views.contact,name='contact')
    

    
]
admin.site.site_header = "saad Admin"
admin.site.site_title = "saad Admin Portal"
admin.site.index_title = "Welcome to saad Portal"
