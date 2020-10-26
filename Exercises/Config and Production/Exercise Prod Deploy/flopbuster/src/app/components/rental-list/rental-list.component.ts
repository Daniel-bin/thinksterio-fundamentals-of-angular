import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "my-rental-list",
  templateUrl: "./rental-list.component.html",
  styles: ["h6 { color: red }"],
})
export class RentalListComponent {
  @Input() rentalList;
  @Output() clearRentalList = new EventEmitter();
}
