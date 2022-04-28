import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Miga = ({ route }) => {
  return <li className={`custom-breadcrumb breadcrumb-item ${route.isLink ? '' : 'active'}`}>
    {
      route.isLink ?
        <Link to={route.link}> {route.name} </Link>
        : route.name
    }
  </li>
}

export const CustomBreadCrumb = ({ routes }) => {
    return (
        <Breadcrumb>
           {
            routes.map((route, index) => <Miga route={route} key={index} />)
           }
        </Breadcrumb>
    );
};