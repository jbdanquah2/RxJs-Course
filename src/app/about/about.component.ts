import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { concat, interval, merge, noop, Observable, of, timer } from "rxjs";
import { map } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const interval$ = interval(1000);
    const interval2$ = interval$.pipe(map((val) => 10 * val));
    const results = merge(interval$, interval2$);
    results.subscribe(console.log);
  }
}
