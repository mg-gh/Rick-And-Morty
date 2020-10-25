import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() title: string;
  @Input() episodes: Episode[];
  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
