from django.urls import path
from .views import DoctorListView,SpecializationListView,DoctorDetailView

urlpatterns = [
    path('', DoctorListView.as_view(), name='doctor-list'),
    path('specializations/', SpecializationListView.as_view(), name='specialization-list'),
    path('<int:pk>/',DoctorDetailView.as_view(),name='doctor-detail'),
]