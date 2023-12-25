import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ngx-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {

  currentMonth: string;
  weekDays: string[];
  calendar: number[][];

  selectedDate = moment().set({
    month: 11,
    //year: 2023
  });



  public eventos = [
    {
      fecha: '2023-11-01',
      titulo: 'Evento 1'
    },
    {
      fecha: '2023-11-02',
      titulo: 'Evento 2'
    },
    {
      fecha: '2023-11-22',
      titulo: 'Evento 3'
    },
    {
      fecha: '2023-1-22',
      titulo: 'Evento dic'
    },
    {
      fecha: '2023-12-02',
      titulo: 'You have been successfully authenticated!'
    },
    {
      fecha: '2023-12-22',
      titulo: 'Encargado del streaming'
    }

  ];
  

  constructor() {
    this.initializeCalendar(this.selectedDate);
  }

  initializeCalendar(selectedDate: moment.Moment) {
    this.currentMonth = selectedDate.format('MMMM YYYY');
    this.weekDays = moment.weekdaysShort();

    const daysInMonth = selectedDate.daysInMonth();
    const firstDayOfMonth = selectedDate.startOf('month').day();
    const adjustedFirstDayOfMonth = (firstDayOfMonth + 7) % 7;

    this.calendar = Array.from({ length: Math.ceil((daysInMonth + adjustedFirstDayOfMonth) / 7) },
      (_, weekIndex) =>
        Array.from({ length: 7 }, (_, dayIndex) => {
          const day = dayIndex + 1 + weekIndex * 7 - adjustedFirstDayOfMonth;
          return day > 0 && day <= daysInMonth ? day : null;
        })
    );
  }

  ngOnInit() {

  }

  mostrarEventos(month: number, day: number): any[] {
    const filteredEvents = this.eventos.filter(evento => {
      // Ajusta el mes al formato de JavaScript (restando 1)
      const eventoMonth = new Date(evento.fecha).getMonth();
      const eventoDay = new Date(evento.fecha).getDate();
      console.log('Evento:', evento.titulo, 'Mes:', eventoMonth, 'Día:', eventoDay);
      return eventoMonth === month && eventoDay === day;
    });
    return filteredEvents;
  }
  



}
