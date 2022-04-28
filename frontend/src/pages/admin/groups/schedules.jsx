import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyCalendar } from '../../../components/ui/schedulesGroups/index';
import { AdminLayout } from '../../../components/layouts/admin-layout';
import { startLoadGroupsSchedules } from '../../../redux/actions/groups';

export const ScheduleScreen = () => {
      const dispatch = useDispatch();
      const { groupSchedules } = useSelector(state => state.allGroups);
      const groupTitle = groupSchedules['codeTab'];
      const schedules = [];
      for (const property in groupSchedules['schedule']) {
        schedules.push(groupSchedules['schedule'][property]);
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
        dispatch(startLoadGroupsSchedules(1));
      }, [dispatch]);

      return (
        <AdminLayout className="border border-dark">
          {console.log(events)}
            <MyCalendar
            title={groupTitle} // titulo del modulo
            data={events} // datos del calendario
            />
        </AdminLayout>
      );
};