import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  googleToken: string = '';

  async googleSignIn() {
    let googleUser = await GoogleAuth.signIn();
    const { idToken } = googleUser.authentication;
    this.googleToken = idToken;
    console.log(this.googleToken)
  }

  async googleRefresh() {
    let authData = await GoogleAuth.refresh();
    const { idToken } = authData;
    this.googleToken = idToken;
    console.log(this.googleToken)
  }

  async googleSignOut() {
    let googleUser = await GoogleAuth.signOut();
    console.log(googleUser)
    this.googleToken = googleUser;
  }
}
