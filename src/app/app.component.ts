import { Component, inject } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CapacitorGoogleAuth-demo';

  platform = inject(Platform);
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      GoogleAuth.initialize({
        clientId: environment.googleClientID,
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      })
    })
  }
}
