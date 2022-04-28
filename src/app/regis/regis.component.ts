import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogRef } from  '@angular/material';
import { MessageComponent } from '../message/message.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {
 onchecked(){
   console.log("hello");
   
 }

  constructor(private dialog:MatDialog) { }
regis(){
  let dialogRef=this.dialog.open(MessageComponent,{data:{
    id:this.onchecked()
  }});
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`); 
  });
  

}
  ngOnInit(): void {
  }

}
