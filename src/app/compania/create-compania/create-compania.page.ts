import { Component, OnInit } from '@angular/core';
import { Compania } from '../../interfaces/Compania';

@Component({
  selector: 'app-create-compania',
  templateUrl: './create-compania.page.html',
  styleUrls: ['./create-compania.page.scss'],
})
export class CreateCompaniaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  createCompania(compania : Compania) {
    //const task = {
      //userId: '1',
     // title,
      //completed: true
    //};
    //this.companiaService.createCompania(task)
    //.subscribe((newTask) => {
    //  this.tasks.unshift(newTask);
    //});
  }

}
