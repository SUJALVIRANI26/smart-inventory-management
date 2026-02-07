from django.urls import path
from . import views

urlpatterns = [
    path('', views.admin_dashboard, name='admin_dashboard'),
    path('users/', views.admin_users, name='admin_users'),
    path('roles/', views.admin_roles, name='admin_roles'),
    path('activity/', views.admin_activity, name='admin_activity'),
    path('settings/', views.admin_settings, name='admin_settings'),
]
