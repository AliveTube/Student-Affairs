from django.template import loader
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Student
from .models import PageAdmins
from django.http import JsonResponse
from django.core import serializers
import json

def mainPage(request):
    return render(request , 'studentAffairs/Main_Page.html')

def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if PageAdmins.objects.filter(username = username , password = password).exists():
            return redirect('homePage')
        else:
            return render(request , 'studentAffairs/LogIn.html')
    return render(request , 'studentAffairs/LogIn.html')

def editPage(request):
    id = request.GET.get('id')
    return render(request , 'studentAffairs/Edit.html', {'id': id})

def addStudentPage(request):
    if request.method == 'POST':
        name = request.POST.get('name-field')
        student_id = request.POST.get('id')
        level = request.POST.get('stdLevel')
        department = request.POST.get('department','General')
        gpa = request.POST.get('GPA')
        status = request.POST.get('Status')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        date_of_birth = request.POST.get('date')
        gender = request.POST.get('Gender')

        student = Student(
            Name=name,
            ID=student_id,
            Level=level,
            Department=department,
            GPA=gpa,
            Status=status,
            Email=email,
            Phone=phone,
            BirthDate=date_of_birth,
            Gender=gender
        )
        student.save()
        return render(request, 'studentAffairs/AddNewStudent.html')
    return render(request, 'studentAffairs/AddNewStudent.html')


def departmentPage(request):
    if request.method == 'POST':
        ID = request.POST.get('stuID')
        student = Student.objects.filter(ID=ID)
        if student.exists():
            return render(request, 'studentAffairs/Department.html', {'student': student})
    return render(request, 'studentAffairs/Department.html')

def homePage(request):
    return render(request , 'studentAffairs/Homepage.html')

def statusPage(request):
    students = Student.objects.all()
    return render(request , 'studentAffairs/Status.html' , {'students' : students})


def ShowPost(request):
     if request.method == 'POST':
        search_value = request.body.decode('utf-8')
        if search_value is not None:
            data = Student.objects.filter(Name__istartswith=search_value)
        else:
            data = Student.objects.all()
        serialized_data = serializers.serialize('json', data)
        deserialized_data = json.loads(serialized_data)
        return JsonResponse(deserialized_data, safe=False)

def ShowData(request):
    if request.method == 'GET':
        data = Student.objects.all()
        return render(request, 'studentAffairs/StudentsData.html', {'data': data})

def reset(request):
     if request.method == 'POST':
        data = Student.objects.all()
        serialized_data = serializers.serialize('json', data)
        deserialized_data = json.loads(serialized_data)
        return JsonResponse(deserialized_data, safe=False)