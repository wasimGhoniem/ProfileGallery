// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'skill.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Skill _$SkillFromJson(Map<String, dynamic> json) => Skill(
  name: json['name'] as String?,
  percent: (json['percent'] as num?)?.toInt(),
  image: json['image'] as String?,
);

Map<String, dynamic> _$SkillToJson(Skill instance) => <String, dynamic>{
  'name': instance.name,
  'image': instance.image,
  'percent': instance.percent,
};
