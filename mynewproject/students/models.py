from django.db import models

class Student(models.Model):
    levels = (
        (1,1),
        (2,2),
        (3,3),
        (4,4),
    )
    departments = (
        ('General','General'),
        ('IS','IS'),
        ('CS','CS'),
        ('IT','IT'),
        ('AI','AI'),
        ('DS','DS'),
    )
    Name = models.CharField(max_length=255 , null = True)
    ID = models.IntegerField(primary_key=True)
    Level = models.IntegerField(null=True , choices=levels)
    Department = models.CharField(max_length=10,default="General",choices=departments)
    GPA = models.DecimalField(max_digits = 3,decimal_places=2,default=0)
    Status = models.CharField(max_length=8,null=True)
    Email = models.CharField(max_length=50,null=True)
    Phone = models.CharField(max_length=11,null=True)
    BirthDate = models.DateField(null=True)
    Gender = models.CharField(max_length=10,null=True,choices=(('Male', 'Male'), ('Female', 'Female')))

class PageAdmins(models.Model):
    username = models.CharField(max_length=255 , primary_key = True)
    password = models.CharField(max_length=30 , null = False)
