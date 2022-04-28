import { Calendar, momentLocalizer  } from 'react-big-calendar';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from 'sweetalert2';
import 'react-big-calendar/lib/css/react-big-calendar.css';
require('moment/locale/es.js');
  
  const localizer = momentLocalizer(moment);

export const MyCalendar = props => {

  const [ temporaryEvents, setTemporaryEvents ] = useState([]);


  const  handleSelect = async ({ start, end }) => {
    
    const { value: title } = await Swal.fire({
      confirmButtonText: `Guardar`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
      cancelButtonColor: "#d33",
      input: 'textarea',
      inputLabel: 'Titulo',
      inputPlaceholder: 'Ingresa el titulo aquí...',
      inputAttributes: {
        'aria-label': 'Ingresa el titulo aquí'
      },
      showCancelButton: true
    });
    if (title){
      setTemporaryEvents(temporaryEvents => [...temporaryEvents,{
        start,
        end,
        title,
      }]);
    }
  };

  useEffect(() => {
    setTemporaryEvents(props.data);
  }, [props.data]);

  return (
    <>
    <div className="container-schedule">
      <div className="row">
          <div className="col-10 shadow p-1 bg-body rounded" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h4>{props.title}</h4>
          </div>
          <div className="col d-flex justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{background:`#93c54b`, color:`white`}}>
                Exportar
              </Dropdown.Toggle>
      
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">EXCEL</Dropdown.Item>
                <Dropdown.Item href="#/action-2">PDF</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
      </div>
      <div className="row">
        <div className="col">
          <div style={{height:`${460}px`, width:`${100}%`}} className="bigCalendar-container mt-5">
            <Calendar 
                selectable
                scrollToTime={new Date(1970, 1, 1, 6)}
                defaultDate={new Date(2021, 2, 15)}
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={handleSelect}
                eventPropGetter={event => ({
                  style: {
                    backgroundColor: event.color,
                  },
                })}
                localizer={localizer} // 
                defaultView="week"
                views={{week: true }}
                events={temporaryEvents} // array que contiene objetos con cada uno de los eventos
                startAccessor="start"
                endAccessor="end"
                messages = {{
                  allDay: 'Todo el día',
                  previous: '<',
                  next: '>',
                  today: 'Hoy',
                  month: 'Mes',
                  week: 'Semana',
                  day: 'Día',
                  agenda: 'Agenda',
                  date: 'Fecha',
                  time: 'Hora',
                  event: 'Evento',
                  noEventsInRange: 'No hay eventos en este rango',
                  showMore: total => `+ Ver más (${total})`
                }}
                />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};