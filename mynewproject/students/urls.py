from django.urls import *
from . import views

urlpatterns = [
    path('', views.mainPage , name = 'mainPage'),
    path('LogIn/', views.loginPage, name = 'loginPage'),
    path('Homepage/', views.homePage, name = 'homePage'),
    path('StudentsData/Edit/<int:id>', views.editPage, name = 'editPage'),
    path('AssignDepartment/', views.departmentPage, name = 'departmentPage'),
    path('AssignDepartment/departmentChange/<int:id>', views.departmentChange, name = 'departmentChange'),
    path('Status/', views.statusPage, name = 'statusPage'),
    path('StudentsData/',views.ShowData, name='ShowData'),
    path('StudentsData/Stud/',views.ShowPost, name='ShowPost'),
    path('StudentsData/res/',views.reset, name='reset'),
    path('MainMenu/', views.mainPage, name = 'mainPage'),
    path('AddNewStudent/', views.addStudentPage , name='addStudentPage'),
    path('Status/Active/', views.showActiveStudents, name='actives'),
    path('Status/Inactive/', views.showInActiveStudents, name='inActives'),
    path('Status/Updated/', views.updateStatus, name='updateStatus'),
]