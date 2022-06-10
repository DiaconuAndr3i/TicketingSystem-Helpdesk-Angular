import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private statsService: StatisticsService) { 
    }

  ngOnInit(): void {

  var institution = localStorage.getItem('institution') || "";
  this.getPeoplePerDep(institution);
  this.getNumberOfTicketsOpenClosed();
  this.getPercentageGuestUsers();
  this.getFinanceData();


  }

  random_rgba(): any {
    var r = () => Math.random() * 256 >> 0;
    return `rgb(${r()}, ${r()}, ${r()})`;
  }

  getPeoplePerDep(institution: any){
    this.statsService.peoplePerDepartment(institution).subscribe((result: any) => {    
      const peoplePerDep = new Chart("peoplePerDep", this.getConfigurationForChart(result, 'People per department'));
    });
  }

  getNumberOfTicketsOpenClosed(){
    this.statsService.numberOfTicketsOpenClosed().subscribe((result: any) => {
      const openClosed = new Chart("openClosed", this.getConfigurationForChart(result, 'Tickets Open - Closed'));
    });
  }

  getPercentageGuestUsers(){
    this.statsService.getPercentageGuests().subscribe((result: any) => {
      const res = {
        guests: result,
        users: (100 - result) 
      };
      const guestsUsers = new Chart("guestsUsers", this.getConfigurationForChart(res, 'Guest User'));
    });
  }

  getFinanceData(){
    this.statsService.getFinanceData().subscribe((result: any) => {
      var labels = [];
      var data = [];
      for(var item in result){
        for(var elem in result[item]){
          if( elem === 'ticker' && result[item][elem].substring(0,3) !== 'EUR' )
              break;
          if( elem === 'ticker' )  
            labels.push(result[item][elem].substring(4,result[item][elem].length));
          if ( elem === 'open' )
            data.push(1/result[item][elem]);
        }
      }

      const finance = new Chart('finance', this.getConfigurationFinanceDataChart(labels, data));

    });
  
  }

  getConfigurationFinanceDataChart(lab: any, dat: any): any{
    
    const labels = lab
    const data = {
      labels: labels,
      datasets: [{
        label: 'Currency Exchange rate',
        data: dat,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    const config = {
      type: 'line',
      data: data,
    };

    return config;

  }

  getConfigurationForChart(result: any, title: any): any{
    var labelsResult = [];
    var dataResult = [];
    var backgroundColorResult = [];

    for (var key in result){
      labelsResult.push(key);
      dataResult.push(result[key]);
      backgroundColorResult.push(this.random_rgba());
    }

    const data = {
      labels: labelsResult,
      datasets: [{
        label: title,
        data: dataResult,
        backgroundColor: backgroundColorResult,
        hoverOffset: 4
      }]
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        animation: {
          animateScale: true
        }
      }
    };

    return config;
  }


  ngOnDestroy(): void {
    
  }

}
