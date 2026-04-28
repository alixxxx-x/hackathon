from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role', 'profile_picture', 'password']
        read_only_fields = ['id', 'role']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        
        # Compact role-specific field mapping
        role_fields = {
            User.Role.PATIENT: ['age', 'wilaya', 'phone'],
            User.Role.PHARMACIST: ['pharmacy_name', 'license_number', 'location', 'phone'],
            User.Role.ADMIN: ['department'],
        }
        
        related_name = instance.role.lower() if instance.role != User.Role.ADMIN else 'administrator'
        profile = getattr(instance, related_name, None)
        
        if profile and instance.role in role_fields:
            for field in role_fields[instance.role]:
                data[field] = getattr(profile, field, None)
                
        return data

    def create(self, validated_data):
        return User.objects.create_user(**validated_data) #drna b create_user() ou mach .create() to hash the password 

class UserProfileSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        read_only_fields = ['id', 'username', 'role']

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Old password is not correct")
        return value

class DrugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drug
        fields = ['registration_number', 'code', 'generic_name', 'brand_name', 'form', 'dosage', 'packaging'] 
        read_only_fields = ['registration_number', 'code', 'generic_name', 'brand_name', 'form', 'dosage', 'packaging']

        
        def validate(self, attrs):
            if not attrs.get('generic_name') and not attrs.get('brand_name'):
                raise serializers.ValidationError("Either generic_name or brand_name must be provided")
            return attrs 

        
        def update(self, instance, validated_data):
            instance.registration_number = validated_data.get('registration_number', instance.registration_number)
            instance.code = validated_data.get('code', instance.code)
            instance.generic_name = validated_data.get('generic_name', instance.generic_name)
            instance.brand_name = validated_data.get('brand_name', instance.brand_name)
            instance.form = validated_data.get('form', instance.form)
            instance.dosage = validated_data.get('dosage', instance.dosage)
            instance.packaging = validated_data.get('packaging', instance.packaging)
            instance.save()
            return instance
            