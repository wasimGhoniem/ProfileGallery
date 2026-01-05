// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:get_it/get_it.dart' as _i174;
import 'package:injectable/injectable.dart' as _i526;
import 'package:supabase_flutter/supabase_flutter.dart' as _i454;

import '../../data/repository/home_repo_impl.dart' as _i214;
import '../../domain/repository/home_repo.dart' as _i893;
import '../../presentation/viewModel/home_view_model.dart' as _i790;
import '../services/data_base_services.dart' as _i757;
import '../services/subabase_data_service.dart' as _i661;
import 'supabase_module.dart' as _i695;

extension GetItInjectableX on _i174.GetIt {
  // initializes the registration of main-scope dependencies inside of GetIt
  _i174.GetIt init({
    String? environment,
    _i526.EnvironmentFilter? environmentFilter,
  }) {
    final gh = _i526.GetItHelper(this, environment, environmentFilter);
    final supabaseModule = _$SupabaseModule();
    gh.lazySingleton<_i454.SupabaseClient>(
      () => supabaseModule.provideSupabaseClient(),
    );
    gh.singleton<_i757.DatabaseService>(
      () => _i661.SupabaseDataService(gh<_i454.SupabaseClient>()),
    );
    gh.lazySingleton<_i893.HomeRepo>(
      () => _i214.HomeRepoImpl(gh<_i757.DatabaseService>()),
    );
    gh.lazySingleton<_i790.HomeViewModel>(
      () => _i790.HomeViewModel(gh<_i893.HomeRepo>()),
    );
    return this;
  }
}

class _$SupabaseModule extends _i695.SupabaseModule {}
