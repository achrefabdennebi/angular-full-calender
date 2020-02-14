import { Component,
 ViewEncapsulation,
 ViewChild,
 ViewContainerRef,
 ComponentFactoryResolver
} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interaction from '@fullcalendar/interaction';
import { HelloComponent } from './hello.component';
import Tether from 'tether';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent  {

  @ViewChild('popoverElementRef', { read: ViewContainerRef, static: true }) popoverElementRef: ViewContainerRef;


  constructor(private factoryResolver: ComponentFactoryResolver) {}

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
      { week: 'narrow'},
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
    end: '2021-03-23'
  }

  public eventRender(info, eventElement): void {
    const oImg = document.createElement("img");
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height', '20px');
    oImg.setAttribute('width', '20px');
    oImg.setAttribute('src', 'https://img.icons8.com/dusk/64/000000/compact-camera.png');
    info.el.prepend(oImg);
  }

  public eventClick(info): void {}

  public eventMouseEnter(info) {
    console.log(info)
    const factory = this.factoryResolver.resolveComponentFactory(HelloComponent);
    const componentRef = this.popoverElementRef.createComponent(factory);
    
    (<HelloComponent>componentRef.instance).name = info.event.title
    
    new Tether({
          element: componentRef.location.nativeElement,
          target: info.el,
          attachment: 'bottom left',
          targetAttachment: 'bottom left',
          classes: {
              element: 'event-tooltip'
          },
          targetOffset: '5px 0'

    });
  }

  public eventMouseLeave(info) {
    this.popoverElementRef.clear();
  }

  public handleDateClick(evnt) {
    console.log(evnt);
  }

  public dayRender(event) {
    if (event.date.getTime() === new Date(2020,1,19).setHours(1,0,0,0) ||
    event.date.getTime() === new Date(2020,1,26).setHours(1,0,0,0) 
    ) {
       event.el.className = event.el.className.concat(' fc-holiday'); 
    }
  }

  slotDuration = {hours: 1};
  
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
      end: "2020-02-15",
      backgroundColor: "#78D5D7",
      classNames: "event-1"
    },    
    {      
      resourceId: "c",
      title: "event 3",
      start: "2020-02-13T12:00:00+00:00",
      end: "2020-02-19T06:00:00+00:00",
      backgroundColor: "#DA4167",
      classNames: "event-2"
    },{     
      resourceId: "f",
      title: "event 4",
      start: "2020-02-14T07:30:00+00:00",
      end: "2020-02-18T09:30:00+00:00",
      backgroundColor: "#F78764",
      classNames: "event-3"
    },    
    { resourceId: "b",
      title: "event 5",
      start: "2020-02-14",
      end: "2020-02-18",
      backgroundColor: "#F78764",
      classNames: "event-4"
    },    
    {      
      resourceId: "e",
      title: "event 2",
      start: "2020-02-13T09:00:00+00:00",
      end: "2020-02-18T14:00:00+00:00",
      backgroundColor: "#C1EEFF",
      classNames: "event-5"
    },
    {
      daysOfWeek: [0,6], //Sundays and saturdays
      rendering:"background",
      color: "#ff9f89",
      overLap: false,
      allDay: true
    }
  ]
}
