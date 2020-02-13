import { Component, ViewEncapsulation
 } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interaction from '@fullcalendar/interaction';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent  {
  name = 'FULL Calender';
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
  resourceLabelText= 'TEST';

  slotLabelFormat = [
      { month: 'long', year: 'numeric' }, // top level of text
      { weekday: 'short', day: 'numeric' }
  ]
  
  resourceColumns = [
    {
      field: 'title',
      render: function(resource, el) {
        var oImg = document.createElement("img");
        
        switch (resource.extendedProps['type']) {
            case 'Plant': 
              oImg.setAttribute('src', 'https://img.icons8.com/dusk/64/000000/compact-camera.png');
              el.className = el.className.concat(' red'); 
              break;
            case 'VALVE':
              oImg.setAttribute('src', 'https://img.icons8.com/dusk/64/000000/portrait-mode-female.png');
              el.className = el.className.concat(' yellow'); 
              break;
            case 'PUMP':
              oImg.setAttribute('src', 'https://img.icons8.com/dusk/64/000000/mind-map.png');
              el.className = el.className.concat(' green'); 
              break;
            default:
             oImg.setAttribute('src', 'https://img.icons8.com/dusk/64/000000/compact-camera.png');
        }

        oImg.setAttribute('alt', 'na');
        oImg.setAttribute('height', '20px');
        oImg.setAttribute('width', '20px');
        el.prepend(oImg);
      }
    }
  ];

  visibleRange = {
    start: '2020-02-10',
    end: '2020-02-14'
  }

  public eventRender(info, eventElement): void {
    const oImg = document.createElement("img");
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height', '20px');
    oImg.setAttribute('width', '20px');
    oImg.setAttribute('src', 'https://img.icons8.com/dusk/64/000000/compact-camera.png');
    info.el.prepend(oImg);
  }

  slotDuration = {days: 1};
  
  ressources = [
      { id: 'a', title: 'Auditorium A', type: "Plant" },
      { id: 'b', title: 'Auditorium B' , type: "VALVE"},
      { id: 'c', title: 'Auditorium C' , type: "PUMP"},
      { id: 'd', title: 'Auditorium D' , type: "Plant"},
      { id: 'e', title: 'Auditorium E' , type: "Plant"},
      { id: 'f', title: 'Auditorium F' , type: "PUMP"},
      { id: 'g', title: 'Auditorium G' , type: "Plant"},
      { id: 'h', title: 'Auditorium H' , type: "Plant"},
      { id: 'i', title: 'Auditorium I' , type: "PUMP"},
      { id: 'j', title: 'Auditorium J' , type: "PUMP"},
      { id: 'k', title: 'Auditorium K' , type: "Plant"},
      { id: 'l', title: 'Auditorium L' , type: "PUMP"},
      { id: 'm', title: 'Auditorium M' , type: "Plant"},
      { id: 'n', title: 'Auditorium N' , type: "Plant"},
      { id: 'o', title: 'Auditorium O' , type: "Plant"},
      { id: 'p', title: 'Auditorium P' , type: "PUMP"},
      { id: 'q', title: 'Auditorium Q' , type: "PUMP"},
      { id: 'r', title: 'Auditorium R' , type: "Plant"},
      { id: 's', title: 'Auditorium S' , type: "Plant"},
      { id: 't', title: 'Auditorium T' , type: "Plant"},
      { id: 'u', title: 'Auditorium U' , type: "Plant"},
      { id: 'v', title: 'Auditorium V' , type: "VALVE"},
      { id: 'w', title: 'Auditorium W' , type: "VALVE"},
      { id: 'x', title: 'Auditorium X' , type: "VALVE"},
      { id: 'y', title: 'Auditorium Y' , type: "Plant"},
      { id: 'z', title: 'Auditorium Z' , type: "VALVE"}
    ]

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
