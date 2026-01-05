// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'portfolio_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PortfolioModel _$PortfolioModelFromJson(Map<String, dynamic> json) =>
    PortfolioModel(
      personalInfo: json['personal_info'] == null
          ? null
          : PersonalInfo.fromJson(
              json['personal_info'] as Map<String, dynamic>,
            ),
      experience: json['experience'] == null
          ? null
          : Experience.fromJson(json['experience'] as Map<String, dynamic>),
      aboutMe: json['about_me'] == null
          ? null
          : AboutMe.fromJson(json['about_me'] as Map<String, dynamic>),
      services: json['services'] == null
          ? null
          : Services.fromJson(json['services'] as Map<String, dynamic>),
      projects: (json['projects'] as List<dynamic>?)
          ?.map((e) => Project.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$PortfolioModelToJson(PortfolioModel instance) =>
    <String, dynamic>{
      'personal_info': instance.personalInfo,
      'experience': instance.experience,
      'about_me': instance.aboutMe,
      'services': instance.services,
      'projects': instance.projects,
    };
