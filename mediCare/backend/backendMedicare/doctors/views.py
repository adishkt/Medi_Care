from django.shortcuts import render
from rest_framework.generics import ListAPIView,RetrieveAPIView
from .models import Doctor,Specialization
from .serializers import DoctorSerializer,SpecializationSerializer


class DoctorListView(ListAPIView):
    serializer_class = DoctorSerializer
    
    def get_queryset(self):
        queryset = Doctor.objects.filter(is_active=True)
        specialization_id=self.request.query_params.get('specialization')
        
        if specialization_id:
            queryset=queryset.filter(specialization_id=specialization_id)
            
        
        return queryset


class SpecializationListView(ListAPIView):
    queryset=Specialization.objects.all()
    serializer_class=SpecializationSerializer    
    
    

class DoctorDetailView(RetrieveAPIView):
    queryset=Doctor.objects.filter(is_active=True)
    serializer_class=DoctorSerializer