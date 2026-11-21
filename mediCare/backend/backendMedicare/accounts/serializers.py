from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate
from django.db import transaction
from rest_framework import serializers
from .models import UserProfile

class SignUpSerializer(serializers.Serializer):
    full_name=serializers.CharField(max_length=150)
    email=serializers.EmailField()
    password=serializers.CharField(
        write_only=True,
        validators=[validate_password]
    )
    confirm_password=serializers.CharField(write_only=True)
    phone = serializers.CharField(max_length=20)
    
    def validate_email(self,value):
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError("An account with this email  already exists")
        
        return value.lower()
    
    def validate_phone(self,value):
        value=value.strip()
        
        if not value:
            raise serializers.ValidationError("Phone number required")
        
        if UserProfile.objects.filter(phone=value).exists():
            raise serializers.ValidationError("Phone number is already registered")
        
        return value
    
    def validate(self,data):
        if data["password"] != data["confirm_password"]:
            raise serializers.ValidationError({"confirm_password":"Passwords does not match"})
        
        if not data["full_name"].strip():
            raise serializers.ValidationError({"full_name": "Full name is required."})
        
        return data 
    
    @transaction.atomic
    def create(self, validated_data):
        full_name = validated_data["full_name"].strip()
        email = validated_data["email"]
        phone = validated_data["phone"]
        password = validated_data["password"]

        
        name_parts = full_name.split(maxsplit=1)

        first_name = name_parts[0]
        last_name = name_parts[1] if len(name_parts) > 1 else ""

        # Generate username from email
        username = email.split("@")[0]

        counter = 1
        base_username = username

        while User.objects.filter(username=username).exists():
            username = f"{base_username}{counter}"
            counter += 1

       
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
        )

        
        UserProfile.objects.create(
            user=user,
            phone=phone
        )

        return user   
    
    


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
    def validate(self,data):
        email = data["email"]
        password=data["password"]
        
        try:
            user_obj=User.objects.get(email__iexact=email)
        except User.DoesNotExist:
            user_obj=None
        
        if user_obj is None:
            raise serializers.ValidationError("Invalid email and password.")
        
        user=authenticate(
            username=user_obj.username,
            password=password
        )
        
        if user is None:
            raise serializers.ValidationError("Invalid email and password")
        
        data["user"]=user
        
        return data

