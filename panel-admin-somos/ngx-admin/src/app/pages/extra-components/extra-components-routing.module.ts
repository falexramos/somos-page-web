import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraComponentsComponent } from './extra-components.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';
import { CalendarGridComponent } from './calendar-grid/calendar-grid.component';

const routes: Routes = [{
  path: '',
  component: ExtraComponentsComponent,
  children: [
    {
      path: 'calendar',
      component: CalendarComponent,
    },
    {
      path: 'calendar-grid',
      component: CalendarGridComponent,
    },
    {
      path: 'progress-bar',
      component: ProgressBarComponent,
    },
    {
      path: 'spinner',
      component: SpinnerComponent,
    },
    {
      path: 'alert',
      component: AlertComponent,
    },
    {
      path: 'calendar-kit',
      component: CalendarKitFullCalendarShowcaseComponent,
    },
    {
      path: 'chat',
      component: ChatComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraComponentsRoutingModule {
}
