import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { env } from '../config';
import { authReducer } from './reducers/authReducer';
import { ambientsReducer } from './reducers/ambientsReducer';
import { competenciesReducer } from './reducers/competenciesReducer';
import { groupsReducer } from './reducers/groupsReducer';
import { modalitiesReducer } from './reducers/modalitiesReducer';
import { formationProgramsReducer } from './reducers/formationProgramsReducer';
import { learningResultsReducer } from './reducers/learningResultsReducer';
import { formationProgramTypesReducer } from './reducers/formationProgramTypesReducer';
import { municipalitiesReducer } from './reducers/municipalitiesReducer';
import { zonesReducer } from './reducers/zonesReducer';
import { contractTypesReducer } from './reducers/contractTypesReducer';
import { positionsReducer } from './reducers/positionsReducer';
import { rolsReducer } from './reducers/rolsReducer';
import { deprogrammingReasonsReducer } from './reducers/deprogrammingReasonsReducer';
import { usersReducer } from './reducers/usersReducer';
import { temporaryUserActivitiesReducer } from './reducers/temporaryUserActivitiesReducer';
import { typeActivitiesReducer } from './reducers/typeActivitiesReducer';
import { programationsReducer } from './reducers/programationsReducer';

const composeEnhancers =
  (env !== 'PROD' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

/**
 * Actions -> Se encarga de comunicarse con el reducer
 * Types -> Tipos de peticiones hacia el reduces
 * Reducer -> Se encarga de recibir las peticiones y cambiar el estado
 * Store -> Almacena los reducers y con estos configura el estado
 */

/**
 * 1              2           3         4           5         6           7
 * Componente -> dispatch -> acción -> dispatch -> acción -> reducer -> cambia estado
 *
 * Paso Final
 * Al cambiar el estado, todos los componentes que esten consumiendo ese estado, van a cambiar
 *
 */

const reducers = combineReducers({
  auth: authReducer,
  allAmbients: ambientsReducer,
  allCompetencies: competenciesReducer,
  allGroups: groupsReducer,
  allModalities: modalitiesReducer,
  allFormationPrograms: formationProgramsReducer,
  allLearningResults: learningResultsReducer,
  allFormationProgramTypes: formationProgramTypesReducer,
  allMunicipalities: municipalitiesReducer,
  allZones: zonesReducer,
  allContractTypes: contractTypesReducer,
  allPositions: positionsReducer,
  allRols: rolsReducer,
  allDeprogrammingReasons: deprogrammingReasonsReducer,
  allUsers: usersReducer,
  allTemporaryUserActivities: temporaryUserActivitiesReducer,
  allTypeActivities: typeActivitiesReducer,
  allProgramations: programationsReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);
