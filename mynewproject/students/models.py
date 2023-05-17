from django.db import models

class Student(models.Model):
    Name = models.CharField(max_length=255,null=True)
    ID = models.IntegerField(primary_key=True)
    Level = models.IntegerField(null=True)
    Department = models.CharField(max_length=2,null=True)
    GPA = models.FloatField(null=True)
    Status = models.CharField(max_length=8,null=True)
    Email = models.CharField(max_length=50,null=True)
    phone = models.CharField(max_length=11,null=True)
    Date = models.DateField(null=True)
    Gender = models.CharField(max_length=10,null=True)
