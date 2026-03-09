import { bootstrapApplication } from '@angular/platform-browser';
import { addIcons } from 'ionicons';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { 
  homeOutline, homeSharp, 
  bedOutline, bedSharp, 
  peopleOutline, peopleSharp,
  folder, folderSharp,
  searchOutline, personCircleOutline,
  constructOutline, cashOutline,arrowBackOutline, // Added for Alerts
  add,
  callOutline,
  trashOutline,
  logOutOutline,
  wifiOutline
} from 'ionicons/icons';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

addIcons({
  'home-outline': homeOutline,
  'home-sharp': homeSharp,
  'bed-outline': bedOutline,
  'bed-sharp': bedSharp,
  'people-outline': peopleOutline,
  'people-sharp': peopleSharp,
  'folder': folder,'add': add,
  'folder-sharp': folderSharp,
  'search-outline': searchOutline,
  'person-outline': personCircleOutline,
  'construct-outline': constructOutline, // For maintenance alerts
  'cash-outline': cashOutline  ,       // For payment alerts
  'arrow-back-outline': arrowBackOutline,
  'call-outline': callOutline, 
  'trash-outline': trashOutline,
  'log-out-outline': logOutOutline,
  'wifi-outline': wifiOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});