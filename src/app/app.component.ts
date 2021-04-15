import { Component, OnInit } from '@angular/core';
import { countUpTimerConfigModel, timerTexts } from 'ngx-timer'; 
import {CountupTimerService } from 'ngx-timer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'speed-game';
  
  buttonBgColor = ''
  topLane =''
  rightLane = ''

  diaba = false;

  randomTop :number =0;
  randomRight :number =0;
  randomButton :number =0;

  counter :number =0;

  testConfig : any;

  listArray = new Array(10);


  colors = ["#00008B","#DC143C","#00FFFF","#006400","#E9967A","#9400D3","#DAA520","#ADFF2F"]

  constructor(private countupTimerService: CountupTimerService) { 
  }

  onClic(){

   this.counter = this.counter + 1
   this.randomButton = Math.floor(Math.random() * (8 + 1));
   this.randomTop = Math.floor(Math.random() * (20 + 1));
   this.randomRight = Math.floor(Math.random() * (90 + 1));

   this.buttonBgColor = this.colors[this.randomButton]

   console.log ("buttonBgColor ", this.buttonBgColor ); 
   console.log ("topLane ", this.randomTop ); 
   console.log ("rightLane ", this.randomRight ); 

   this.topLane = this.randomTop +'%'
   this.rightLane = this.randomRight +'%'

   console.log ("iteration number ", this.counter ); 
    if(this.counter == 10){
      this.stopTimer();
      console.log ("last one ");
      this.diaba = true;
    }

  }

  onClickBleu(){
    this.diaba = false;
    this.countupTimerService.startTimer();
  }

  ngOnInit() {
    this.diaba = true;
    this.onClic();

    this.testConfig = new countUpTimerConfigModel();
    
    this.testConfig.timerClass  = 'test_Timer_class';
 
    this.testConfig.timerTexts = new timerTexts();

    this.testConfig.timerTexts.hourText = " "; //default - hh
    this.testConfig.timerTexts.minuteText = " "; //default - mm

  }
  stopTimer(){
    this.countupTimerService.pauseTimer();
  }

}
