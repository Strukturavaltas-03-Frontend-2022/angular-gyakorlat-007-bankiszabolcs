import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

   event: Event = new Event()

  constructor(
    private eventS: EventService,
    private activatedR: ActivatedRoute,
    private location: Location,
    ) {
      this.activatedR.params.subscribe(
        p =>   this.eventS.get(p['id']).subscribe(ev=> this.event = ev)
         )
    }

    onSubmit(data:Event):void{
      this.eventS.update(data).subscribe(
        data=>{
      this.location.back()
        }
        )
    }


  ngOnInit(): void {

  }

}
