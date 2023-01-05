import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {concat, fromEvent, interval, noop, observable, Observable, of, timer, merge, Subject, BehaviorSubject, AsyncSubject, ReplaySubject} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import { Store } from '../common/store.service';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(private store: Store) {

    }
    ngOnInit() {
        // const subject = new Subject({})
        // const subject = new BehaviorSubject({}); // emits last emitted value to late subscribers
        // const subject = new AsyncSubject() // waits till completion before emitting a value - linked to observable completion
        const subject = new ReplaySubject() // replays the complete observable to all late subcribers - not linked to observable completion
        const series$ = subject.asObservable();
        series$.subscribe(val => console.log("early sub:", val));

        subject.next(1+5);
        subject.next(2);
        subject.next(3);
        // subject.complete();

        setTimeout(()=> {
            series$.subscribe(val => console.log("late sub:",val))
            subject.next(4);
        },
            3000
        )
        
        
        
    }


}






