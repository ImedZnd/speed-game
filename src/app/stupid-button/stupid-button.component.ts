import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stupid-button',
  templateUrl: './stupid-button.component.html',
  styleUrls: ['./stupid-button.component.css']
})
export class StupidButtonComponent implements OnInit {

  buttonBgColor = ''
  topLane =''
  rightLane = ''

  randomTop :number =0;
  randomRight :number =0;
  randomButton :number =0;
  colors = ["#00008B","#DC143C","#00FFFF","#006400","#E9967A","#9400D3","#DAA520","#ADFF2F"]

  constructor() { 
    //this.onClic();
    this.styleObject()
  }

  onClic(){
   this.randomButton = Math.floor(Math.random() * (8 + 1));
   this.randomTop = Math.floor(Math.random() * (500 + 1));
   this.randomRight = Math.floor(Math.random() * (500 + 1));

   this.buttonBgColor = this.colors[this.randomButton]
   this.topLane = this.randomTop+'xp'
   this.rightLane = this.randomRight+'xp'

   console.log ("buttonBgColor ", this.buttonBgColor ); 
   console.log ("topLane ", this.topLane ); 
   console.log ("rightLane ", this.rightLane ); 
  }
  //[ngStyle] = "{'top': topLane}"
  //[ngStyle] = "{'right': rightLane}" 
  //"{'background-color': buttonBgColor}"


  styleObject(): Object {
        return {'top': this.randomTop+ 'px','left': this.rightLane+ 'px','background-color':this.buttonBgColor}
}


  ngOnInit(): void {

  }

}
