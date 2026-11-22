from django.db import models

# Create your models here.
class Specialization(models.Model):
    name = models.CharField(max_length=50,unique=True)
    
    def __str__(self):
        return self.name
    

class Doctor(models.Model):
    name = models.CharField(max_length=50)
    specialization = models.ForeignKey(Specialization,on_delete=models.CASCADE,related_name="doctors")
    qualification = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    experience=models.PositiveIntegerField()
    consultation_fee=models.DecimalField(max_digits=8,decimal_places=2)
    description=models.TextField()
    image=models.ImageField(upload_to="doctors/", blank=True, null=True)
    is_active=models.BooleanField(default=True)
    
    def __str__(self):
        return self.name
    
    
class DoctorSchedule(models.Model):
    WEEKDAYS = [
        (0, 'Monday'),
        (1, 'Tuesday'),
        (2, 'Wednesday'),
        (3, 'Thursday'),
        (4, 'Friday'),
        (5, 'Saturday'),
        (6, 'Sunday'),
    ]
    
    doctor=models.ForeignKey(Doctor,on_delete=models.CASCADE,related_name='schedules')
    weekday=models.IntegerField(choices=WEEKDAYS)
    start_time=models.TimeField()
    end_time=models.TimeField()
    slot_duration=models.PositiveIntegerField(default=30)
    is_active=models.BooleanField(default=True)
    
    class Meta:
        unique_together=('doctor','weekday')
        
    def __str__(self):
        return f"{self.doctor.name} - {self.get_weekday_display()}"
    
    