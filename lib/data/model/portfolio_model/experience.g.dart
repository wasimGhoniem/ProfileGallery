// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'experience.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Experience _$ExperienceFromJson(Map<String, dynamic> json) => Experience(
  id: (json['id'] as num?)?.toInt(),
  projectsNumber: (json['projects_number'] as num?)?.toInt(),
  happyClients: (json['happy_clients'] as num?)?.toInt(),
  experiences: (json['Experiences'] as num?)?.toInt(),
);

Map<String, dynamic> _$ExperienceToJson(Experience instance) =>
    <String, dynamic>{
      'id': instance.id,
      'projects_number': instance.projectsNumber,
      'happy_clients': instance.happyClients,
      'Experiences': instance.experiences,
    };
