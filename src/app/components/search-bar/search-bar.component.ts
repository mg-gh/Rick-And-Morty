import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public control: FormControl = new FormControl();
  @Output() emitter: EventEmitter<string> = new EventEmitter();
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  public emitSearch(name: string): void {
    if (!name) {
      this.control.reset();
    }
    this.emitter.emit(name);
  }
}
