// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'personal_info.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PersonalInfo _$PersonalInfoFromJson(Map<String, dynamic> json) => PersonalInfo(
  id: (json['id'] as num?)?.toInt(),
  name: json['name'] as String?,
  photo: json['photo'] as String?,
  email: json['email'] as String?,
  githubLink: json['github_link'] as String?,
  cvLink: json['cv_link'] as String?,
  linkedinLink: json['linkedin_link'] as String?,
  whatsappNumber: json['whatsapp_number'] as String?,
);

Map<String, dynamic> _$PersonalInfoToJson(PersonalInfo instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'photo': instance.photo,
      'email': instance.email,
      'github_link': instance.githubLink,
      'cv_link': instance.cvLink,
      'linkedin_link': instance.linkedinLink,
      'whatsapp_number': instance.whatsappNumber,
    };
