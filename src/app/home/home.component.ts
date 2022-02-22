import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  counterUsers: number = 0;
  counterUsersLimit?:number;
  counterUsersStop: any = setInterval(() => {
    if (this.counterUsersLimit != undefined && this.counterUsersLimit != 0)
      this.counterUsers++;

    if (this.counterUsers == this.counterUsersLimit){
      clearInterval(this.counterUsersStop);
    }
  },100);

  counterTickets: number = 0;
  counterTicketsLimit?: number;
  counterTicketsStop: any = setInterval(() => {
    if (this.counterTicketsLimit != undefined && this.counterTicketsLimit != 0)
      this.counterTickets++;

    if (this.counterTickets == this.counterTicketsLimit){
      clearInterval(this.counterTicketsStop);
    }
  },100);

  percentageGuests: number = 0;
  percentageGuestsLimit?: number;
  incrementPercentageGuests: number = 0;
  percentageGuestsStop: any = setInterval(() => {
    if (this.percentageGuestsLimit != undefined && this.percentageGuestsLimit != 0)
      this.percentageGuests = this.percentageGuests + this.incrementPercentageGuests;

    if (this.percentageGuests == this.percentageGuestsLimit){
      clearInterval(this.percentageGuestsStop);
    }
  },100);

  constructor(private statsService: StatisticsService) { }

  ngOnInit(): void {

    this.statsService.getNumberOfUsers().subscribe(response =>{
      this.counterUsersLimit = response;
      this.statsService.getPercentageGuests().subscribe(res => {
        this.percentageGuestsLimit = res;
        this.incrementPercentageGuests =  response != 0? res / response: res / 10;
      });
    });

    this.statsService.getNumberOfTickets().subscribe(response => {
      this.counterTicketsLimit = response; 
    });
  }

}
