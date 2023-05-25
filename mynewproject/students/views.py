from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse
from pyexpat.errors import messages

from .models import Student
from .models import PageAdmins
from django.http import JsonResponse
from django.core import serializers
import json


def mainPage(request):
    return render(request, 'studentAffairs/Main_Page.html')


def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if PageAdmins.objects.filter(username=username, password=password).exists():
            return redirect('homePage')
        else:
            return render(request, 'studentAffairs/LogIn.html')
    return render(request, 'studentAffairs/LogIn.html')


def editPage(request, id):
    student = Student.objects.get(ID=id)
    if request.method == 'POST':
        student.Name = request.POST.get('name-field')
        student.Level = request.POST.get('stdLevel')
        student.Department = request.POST.get('department')
        student.GPA = request.POST.get('GPA')
        student.Status = request.POST.get('Status')
        student.Email = request.POST.get('email')
        student.Phone = request.POST.get('phone')
        student.BirthDate = request.POST.get('date')
        student.Gender = request.POST.get('Gender')
        if student.Level < '3':
            student.Department = 'General'
        student.save()
        return HttpResponseRedirect(reverse('ShowData'))

    return render(request, 'studentAffairs/Edit.html', {'student': student})


def delete(request, id):
    student = Student.objects.get(ID=id)
    student.delete()
    return HttpResponseRedirect(reverse('ShowData'))


def addStudentPage(request):
    if request.method == 'POST':
        name = request.POST.get('name-field')
        student_id = request.POST.get('id')
        level = request.POST.get('stdLevel')
        department = request.POST.get('department', 'General')
        gpa = request.POST.get('GPA')
        status = request.POST.get('Status')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        date_of_birth = request.POST.get('date')
        gender = request.POST.get('Gender')
        if not student_id.isdigit():
             return render(request, 'studentAffairs/AddNewStudent.html', {'error': 'ID should be numbers only.'})
        check = Student.objects.filter(ID=student_id)
        if check:
            return render(request, 'studentAffairs/AddNewStudent.html', {'error': 'ID is Duplicated.'})
        if not name.isalpha():
             return render(request, 'studentAffairs/AddNewStudent.html', {'error': 'Name should be chars only.'})
        if not len(name) <= 255:
             return render(request, 'studentAffairs/AddNewStudent.html', {'error': 'Name is too long.'})

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
        if Student.objects.filter(ID=student.ID).exists():
            error_message = "Student ID already exists. Please choose a different ID."
            return render(request, 'studentAffairs/AddNewStudent.html', {'error': error_message})
        student.save()
        return render(request, 'studentAffairs/AddNewStudent.html')
    return render(request, 'studentAffairs/AddNewStudent.html')


def departmentPage(request):
    if request.method == 'POST':
        id = request.POST.get('stuID')
        student = Student.objects.get(ID=id)
        return render(request, 'studentAffairs/Department.html', {'student': student})
    return render(request, 'studentAffairs/Department.html')


def departmentChange(request, id):
    if request.method == 'POST':
        student = Student.objects.get(ID=id)
        newDepartment = request.POST.get('department')
        student.Department = newDepartment
        student.save()
    return HttpResponseRedirect(reverse('departmentPage'))


def homePage(request):
    return render(request, 'studentAffairs/Homepage.html')


def statusPage(request):
    students = Student.objects.all()
    return render(request, 'studentAffairs/Status.html', {'students': students})


def showActiveStudents(request):
    students = Student.objects.filter(Status="Active")
    return render(request, 'studentAffairs/Status.html', {'students': students})


def showInActiveStudents(request):
    students = Student.objects.filter(Status="Inactive")
    return render(request, 'studentAffairs/Status.html', {'students': students})


def updateStatus(request):
    if request.method == "POST":
        student = Student.objects.get(ID=int(request.POST.get("ID")))
        student.Status = request.POST.get('newStatus')
        student.save()
        students = Student.objects.all()
        return render(request, 'studentAffairs/Status.html', {'students': students})


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
