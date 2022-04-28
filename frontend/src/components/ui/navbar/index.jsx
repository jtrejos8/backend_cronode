import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../../redux/actions/auth';
import { StyledNavbar } from './styles';
import Logo from '../../../assets/img/logo_nav.png';
import { Dropdown } from 'react-bootstrap';

export const CustomNavbar = () => {
  const { username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <StyledNavbar expand="lg" className="bg-light">
    <a className="navbar-brand" href="/">
     <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
    </a>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm" className="item">
              Ambientes
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Link className="dropdown-item" to="/ambients">Ambientes</Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm" className="item">
              Programas de formación
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link className="dropdown-item" to="/competencies">Competencias</Link>
              <Link className="dropdown-item" to="/groups">Grupos</Link>
              <Link className="dropdown-item" to="/modalities">Modalidades</Link>
              <Link className="dropdown-item" to="/formationprograms">Programas de formación</Link>
              <Link className="dropdown-item" to="/learningResults">Resultados de aprendizaje</Link>
              <Link className="dropdown-item" to="/formationProgramTypes">Tipos de programas de formación </Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm" className="item">
              Ubicaciones
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link className="dropdown-item" to="/municipalities">Municipios</Link>
              <Link className="dropdown-item" to="/zones">Zonas</Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm" className="item">
              Parametrización
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link className="dropdown-item" to="/contractTypes">Tipos de contratos</Link>
              <Link className="dropdown-item" to="/positions">Posiciones</Link>
              <Link className="dropdown-item" to="rols">Roles</Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm" className="item">
              Desprogramaciones
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link className="dropdown-item" to="/deprogrammingReasons">Razones de desprogramación</Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm" className="item">
              Usuarios
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link className="dropdown-item" to="/users">Usuarios</Link>
              <Link className="dropdown-item" to="/temporaryUserActivities">Usuarios temporales</Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm" className="item">
              Tipo de activdades
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link className="dropdown-item" to="/typeActivities">Tipo de activdades</Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm" className="item">
              Programaciones
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link className="dropdown-item" to="/programations">Programaciones</Link>
              <Link className="dropdown-item" to="/schedules">Horario ambientes</Link>
              <Link className="dropdown-item" to="/schedules">Horario grupos</Link>
              <Link className="dropdown-item" to="/schedules">Horario usuarios</Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav className="ml-auto">
          <Link className="nav-item nav-link" to="#">
            {username}
          </Link>
          <Nav.Link onClick={onLogout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};
