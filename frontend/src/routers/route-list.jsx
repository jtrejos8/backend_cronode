import { AmbientsScreen } from '../pages/admin/ambients';
import { CompetenciesScreen } from '../pages/admin/competencies';
import { GroupsScreen } from '../pages/admin/groups';
import { ModalitiesScreen } from '../pages/admin/modalities';
import { FormationProgramsScreen } from '../pages/admin/formationprograms';
import { LearningResultsScreen } from '../pages/admin/learningResults';
import { FormationProgramTypesScreen } from '../pages/admin/formationProgramTypes';
import { MunicipalitiesScreen } from '../pages/admin/municipalities';
import { ZonesScreen } from '../pages/admin/zones';
import { ContractTypesScreen } from '../pages/admin/contractTypes';
import { PositionsScreen } from '../pages/admin/positions';
import { RolsScreen } from '../pages/admin/rols';
import { DeprogrammingReasonsScreen } from '../pages/admin/deprogrammingReasons';
import { UsersScreen } from '../pages/admin/users';
import { TemporaryUserActivitiesScreen } from '../pages/admin/temporaryUserActivities';
import { TypeActivitiesScreen } from '../pages/admin/typeActivities';
import { ProgramationsScreen } from '../pages/admin/programations';
import { ScheduleScreen } from '../pages/admin/ambients/schedules';
import { HomeScreen } from '../pages/admin/home';
import { LoginScreen } from '../pages/login';

export const routes = [
  {
    path: '/auth/login',
    component: LoginScreen,
    exact: true,
    isPublic: true,
  },
  {
    path: '/ambients',
    component: AmbientsScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/competencies',
    component: CompetenciesScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/groups',
    component: GroupsScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/home',
    component: HomeScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/modalities',
    component: ModalitiesScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/formationprograms',
    component: FormationProgramsScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/learningResults',
    component: LearningResultsScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/formationProgramTypes',
    component: FormationProgramTypesScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/municipalities',
    component: MunicipalitiesScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/zones',
    component: ZonesScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/contractTypes',
    component: ContractTypesScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/positions',
    component: PositionsScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/rols',
    component: RolsScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/deprogrammingReasons',
    component: DeprogrammingReasonsScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/users',
    component: UsersScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/temporaryUserActivities',
    component: TemporaryUserActivitiesScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/typeActivities',
    component: TypeActivitiesScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/programations',
    component: ProgramationsScreen,
    exact: true,
    isPublic: false,
  },
  {
    path: '/schedules',
    component: ScheduleScreen,
    exact: true,
    isPublic: false,
  },
];
