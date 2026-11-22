from django.contrib import admin
from.models import Specialization,Doctor,DoctorSchedule

class DoctorAdmin(admin.ModelAdmin):
    list_display=['name','specialization','qualification','consultation_fee','experience','is_active']
    list_filter=['specialization','is_active']
    search_fields=['name','qualification','specialization__name']
    list_editable=['is_active']
    ordering = ['name']
    
class DoctorScheduleAdmin(admin.ModelAdmin):
    list_display = ['doctor', 'weekday', 'start_time', 'end_time', 'slot_duration', 'is_active']
    list_filter = ['weekday', 'is_active', 'doctor']
    list_editable = ['is_active']
    ordering = ['doctor', 'weekday']

# Register your models here.
admin.site.register(Specialization)
admin.site.register(Doctor,DoctorAdmin)
admin.site.register(DoctorSchedule,DoctorScheduleAdmin)


