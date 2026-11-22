from django.contrib import admin
from.models import Specialization,Doctor

class DoctorAdmin(admin.ModelAdmin):
    list_display=['name','specialization','consultation_fee','experience','is_active']
    list_filter=['specialization']
    search_fields=['name','specialization__name']
    list_editable=['is_active']
    

# Register your models here.
admin.site.register(Specialization)
admin.site.register(Doctor,DoctorAdmin)

