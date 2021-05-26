import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  MonthView,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';

const Calender:React.FC = () => {
    const currentDate = '2018-11-01';
    const schedulerData = [
        { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
        { startDate: '2018-11-20T12:00', endDate: '2018-11-20T20:30', title: 'Go to a gym' },
    ];
    return(
        <Paper style={{margin:50}}>
            <Scheduler
            data={schedulerData}
            >
                <ViewState
                    currentDate={currentDate}
                />
                {/* <DayView
                    startDayHour={7}
                    endDayHour={18}
                /> */}
                <MonthView />
                <Appointments />
                <AppointmentTooltip
                    showCloseButton
                    showOpenButton
                />
                <AppointmentForm/>
            </Scheduler>
        </Paper>
    )
}

export default Calender;