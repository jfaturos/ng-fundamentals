import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})

export class EventThumbnailComponent{
    @Input() event: any
    @Output() eventClick = new EventEmitter();

    handleClickMe() {
        console.log('clicked!');
        this.eventClick.emit(this.event.name);
    }
}