from django.shortcuts import render, redirect
from .models import Student



def add_student(request):
    if request.method == 'POST':
        name = request.POST['name-field']
        student_id = request.POST['id']
        level = 2
        department = 'IS'
        gpa = 3.75
        status = 'inactive'
        email = request.POST['email']
        phone = request.POST['phone']
        date_of_birth = '2003-2-20'
        gender = 'fam'

        student = Student(
            Name=name,
            ID=student_id,
            Level=level,
            Department=department,
            GPA=gpa,
            Status=status,
            Email=email,
            phone=phone,
            Date=date_of_birth,
            Gender=gender
        )
        student.save()
    return render(request, 'AddNewStudent.html')  # Render the form template
