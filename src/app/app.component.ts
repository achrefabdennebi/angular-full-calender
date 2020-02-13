import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interaction from '@fullcalendar/interaction';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  calendarPlugins = [ interaction, resourceTimelinePlugin]; // important!

  timeZone = 'UTC';
  header =  {
    left: '',
    center: 'title',
    right: ''
  };

  aspectRatio =  1.5;
  locale = 'fr';

  editable= true;
  resourceLabelText= 'Rooms';

  dataEvents = [
    {
      resourceId: "d",
      title: "event 1",
      start: "2020-02-12",
      end: "2020-02-14"
    },    
    {      
      resourceId: "c",
      title: "event 3",
      start: "2020-02-13T12:00:00+00:00",
      end: "2020-02-14T06:00:00+00:00"
    },{     
      resourceId: "f",
      title: "event 4",
      start: "2020-02-13T07:30:00+00:00",
      end: "2020-02-13T09:30:00+00:00"
    },    
    { resourceId: "b",
      title: "event 5",
      start: "2020-02-13T10:00:00+00:00",
      end: "2020-02-13T15:00:00+00:00"
    },    
    {      
      resourceId: "e",
      title: "event 2",
      start: "2020-02-13T09:00:00+00:00",
      end: "2020-02-13T14:00:00+00:00"
    }
  ]
}
