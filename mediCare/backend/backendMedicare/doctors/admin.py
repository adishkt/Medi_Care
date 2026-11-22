from django.contrib import admin
from.models import Specialization,Doctor

class DoctorAdmin(admin.ModelAdmin):
    list_display=['name','specialization','qualification','consultation_fee','experience','is_active']
    list_filter=['specialization','is_active']
    search_fields=['name','qualification','specialization__name']
    list_editable=['is_active']
    ordering = ['name']
    

# Register your models here.
admin.site.register(Specialization)
admin.site.register(Doctor,DoctorAdmin)

