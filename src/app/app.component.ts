import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar'; // Import these
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() { }

  async ngOnInit() {
    // This makes the top bar white on Android
    await StatusBar.setBackgroundColor({ color: '#ffffff' });

    // This makes the time/battery icons Dark (so they show on white)
    await StatusBar.setStyle({ style: Style.Light });
  }
}
