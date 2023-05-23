from django.urls import *
from . import views

urlpatterns = [
    path('', views.mainPage , name = 'mainPage'),
    path('LogIn/', views.loginPage, name = 'loginPage'),
    path('Homepage/', views.homePage, name = 'homePage'),
    path('Edit/', views.editPage, name = 'editPage'),
    path('AssignDepartment/', views.departmentPage, name = 'departmentPage'),
    path('Status/', views.statusPage, name = 'statusPage'),
    path('StudentsData/', views.studentsDataPage, name = 'studentsDataPage'),
    path('MainMenu/', views.mainPage, name = 'mainPage'),
    path('AddNewStudent/', views.addStudentPage , name='addStudentPage'),
]
