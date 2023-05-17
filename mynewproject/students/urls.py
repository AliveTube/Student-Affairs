from django.urls import path
from .views import add_student

urlpatterns = [
    path('AddNewStudent/', add_student, name='add_student'),
]
