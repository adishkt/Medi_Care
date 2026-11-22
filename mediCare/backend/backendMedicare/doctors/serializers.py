from rest_framework import serializers
from .models import Specialization,Doctor

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