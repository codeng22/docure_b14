import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'icici';
  public value: any;
  public products:any;

  // public rangeDates: number[] = [];

  constructor(private confirmationService: ConfirmationService){
    // this.rangeDates = "new Date();"
    this.products=[
      {code:1, name:'Apple'},
      {code:2, name:'Samsung'},
      {code:3, name:'OnePlus'}
    ]
  }


  confirm() {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to perform this action?',
          accept: () => {
              //Actual logic to perform a confirmation
          }
      });
  }

}
