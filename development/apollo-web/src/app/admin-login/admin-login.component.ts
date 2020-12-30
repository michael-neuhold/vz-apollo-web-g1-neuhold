import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  login: any = {
    username: '',
    password: ''
  };

  private returnString: string = '';

  constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.returnString = params['returnUrl'];
      console.log(params);
    })
  }

  submitForm() {
    console.log("submit form");
    if (this.auth.login()) {
      console.log("login true");
      console.log(this.returnString);
      this.router.navigateByUrl(this.returnString);
    } else {
      // TODO error message
    }
  }
  

}