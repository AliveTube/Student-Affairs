from django.urls import *
from . import views

urlpatterns = [
    path('', views.mainPage , name = 'mainPage'),
    path('LogIn/', views.loginPage, name = 'loginPage'),
    path('Homepage/', views.homePage, name = 'homePage'),
    path('StudentsData/Edit/<int:id>', views.editPage, name = 'editPage'),
    path('AssignDepartment/', views.departmentPage, name = 'departmentPage'),
    path('Status/', views.statusPage, name = 'statusPage'),
    path('StudentsData/',views.ShowData, name='ShowData'),
    path('StudentsData/Stud/',views.ShowPost, name='ShowPost'),
    path('StudentsData/res/',views.reset, name='reset'),
    path('MainMenu/', views.mainPage, name = 'mainPage'),
    path('AddNewStudent/', views.addStudentPage , name='addStudentPage'),
]
