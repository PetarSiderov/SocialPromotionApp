import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-telegram-phone-numbers',
  templateUrl: './telegram-phone-numbers.component.html',
  styleUrls: ['./telegram-phone-numbers.component.scss']
})
export class TelegramPhoneNumbersComponent implements OnInit {

  public phoneNumbers: any;
  public groupChanels: any;
  public showAccounts: boolean = true;

  constructor(private apiService: ApiService) {
    
  } 
  ngOnInit(): void {
    this.submit(this.showAccounts, null)
  }

  submit(showAccounts: boolean, userElement: any){
    this.showAccounts = showAccounts
    if(!showAccounts && userElement != null){
      this.apiService.getGroupsUser(userElement.phone).subscribe(s => {
        this.groupChanels = s
      })
    }
    else if(showAccounts && userElement == null){
      this.apiService.getAllPhoneNumbers().subscribe(s => {
        this.phoneNumbers = s;
    });
    }
   
  }
}
