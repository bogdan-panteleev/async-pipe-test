import {
  Component,
} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  value = {value: 1};
  log() {
    console.log('root checked');
  }
}

@Component({
  selector: 'app-nested',
  template: 'Nested value: {{obs$ | async}} {{log()}}',
})
export class NestedComponent{
  public obs$ = new Observable((subscriber) => {
    subscriber.next(2);
    console.log('new subscription');
  })

  log() {
    console.log('nested checked');
  }
}
