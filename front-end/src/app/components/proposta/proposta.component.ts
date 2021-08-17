import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {

  dataHoje = new Date()

  constructor() { }

  ngOnInit(): void {
  }


}
