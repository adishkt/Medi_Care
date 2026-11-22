from django.db import models

# Create your models here.
class Specialization(models.Model):
    name = models.CharField(max_length=50,unique=True)
    
    def __str__(self):
        return self.name
    

class Doctor(models.Model):
    name = models.CharField(max_length=50)
    specialization = models.ForeignKey(Specialization,on_delete=models.CASCADE,related_name="doctors")
    experience=models.PositiveIntegerField()
    consultation_fee=models.DecimalField(max_digits=8,decimal_places=2)
    description=models.TextField()
    is_active=models.BooleanField(default=True)
    
    def __str__(self):
        return self.name
    
    