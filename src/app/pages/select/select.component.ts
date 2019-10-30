import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit() {
  }

  goToSelfReg() {
    this.router.navigate(['pages/self-reg']);
  }

}
