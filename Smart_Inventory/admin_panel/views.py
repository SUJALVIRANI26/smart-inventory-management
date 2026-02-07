from django.shortcuts import render


def admin_dashboard(request):
    return render(request, 'admin_dashboard.html')


def admin_users(request):
    return render(request, 'admin_users.html')


def admin_roles(request):
    return render(request, 'admin_roles.html')


def admin_activity(request):
    return render(request, 'admin_activity.html')


def admin_settings(request):
    return render(request, 'admin_settings.html')
