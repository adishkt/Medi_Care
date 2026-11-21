from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from .serializers import SignUpSerializer,LoginSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class SignUpView(generics.GenericAPIView):
    serializer_class=SignUpSerializer
    permission_classes=[AllowAny]
    
    def post(self,request):
        serializer=SignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response(
            {
                "message": "Account created successfully",
                "user": {
                    "id": user.id,
                    "full_name": user.get_full_name(),
                    "email": user.email,
                },
            },
            status=status.HTTP_201_CREATED,
        )
        

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)

        return Response(
            {
                "message": "Login successful",
                "token": token.key,
                "user": {
                    "id": user.id,
                    "full_name": user.get_full_name(),
                    "email": user.email,
                },
            },
            status=status.HTTP_200_OK,
        )
        
        
        
class LogoutView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()

        return Response(
            {
                "message": "Logout successful"
            },
            status=status.HTTP_200_OK
        )