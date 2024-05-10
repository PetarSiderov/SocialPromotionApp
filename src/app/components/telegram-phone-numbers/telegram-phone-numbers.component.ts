import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-telegram-phone-numbers',
  templateUrl: './telegram-phone-numbers.component.html',
  styleUrls: ['./telegram-phone-numbers.component.scss']
})
export class TelegramPhoneNumbersComponent implements OnInit {

  public phoneNumbers: any;

  constructor(private apiService: ApiService) {
    
  } 
  ngOnInit(): void {
    this.apiService.getAllPhoneNumbers().subscribe(s => {
        debugger
        this.phoneNumbers = s;
    });
  }
}
