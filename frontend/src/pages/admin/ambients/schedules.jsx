import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyCalendar } from '../../../components/ui/schedulesAmbients/index';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { startLoadAmbientSchedules } from '../../../redux/actions/ambients';

export const ScheduleScreen = () => {
      const dispatch = useDispatch();
      const { ambientSchedules } = useSelector(state => state.allAmbients);
      const ambientTitle = ambientSchedules['name'];
      const schedules = [];
      for (const property in ambientSchedules['schedule']) {
        schedules.push(ambientSchedules['schedule'][property]);
      }
      const events = schedules.map(schedule => (
        {
          title: schedule.summary,
          start: new Date(schedule.startDate),
          end: new Date(schedule.endDate),
          color: '#E36C6C'
        }
      ));
      useEffect(() => {
        dispatch(startLoadAmbientSchedules(1));
      }, [dispatch]);

      return (
        <AdminLayout className="border border-dark">
          {console.log(events)}
            <MyCalendar
            title={ambientTitle} // titulo del modulo
            data={events} // datos del calendario
            />
        </AdminLayout>
      );
};