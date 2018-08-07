import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onLoadFeature = 'recipe';
  onNavigte(feature: string) {
    this.onLoadFeature = feature;
  }
}
