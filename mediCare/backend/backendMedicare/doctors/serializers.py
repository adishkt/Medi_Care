from rest_framework import serializers
from .models import Specialization,Doctor,DoctorSchedule

class SpecializationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Specialization
        fields=['id','name']
        

class DoctorSerializer(serializers.ModelSerializer):
    specialization=SpecializationSerializer()
    image=serializers.ImageField(read_only=True)
    
    class Meta:
        model=Doctor
        fields=['id','name','specialization','qualification','phone','experience','consultation_fee','description','image','is_active']
        

class DoctorScheduleSerializer(serializers.ModelSerializer):
    doctor_name=serializers.CharField(source='doctor.name',read_only=True)
    weekday_name=serializers.CharField(source='get_weekday_display',read_only=True)
    class Meta:
        model = DoctorSchedule
        fields = [
            'id',
            'doctor',
            'doctor_name',
            'weekday',
            'weekday_name',
            'start_time',
            'end_time',
            'slot_duration',
            'is_active'
        ]
        
