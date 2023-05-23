from django.template import loader
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Student
from .models import PageAdmins

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
    return render(request , 'studentAffairs/Edit.html')

def addStudentPage(request):
    if request.method == 'POST':
        name = request.POST.get('name-field')
        student_id = request.POST.get('id')
        level = request.POST.get('stdLevel')
        department = request.POST.get('department')
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
    return render(request , 'studentAffairs/AddNewStudent.html')

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

def studentsDataPage(request):
    students = Student.objects.all()
    return render(request , 'studentAffairs/StudentsData.html' , {'students' : students})
