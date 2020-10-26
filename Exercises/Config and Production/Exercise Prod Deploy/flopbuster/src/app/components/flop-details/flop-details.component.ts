import { ActivatedRoute, Router } from "@angular/router";
import { Component, EventEmitter, Input, Output } from "@angular/core";

import { FlopService } from "../flop-list/flop.service";

@Component({
  selector: "my-flop-details",
  templateUrl: "./flop-details.component.html",
  styleUrls: [],
})
export class FlopDetailsComponent {
  flop;

  constructor(
    private flopService: FlopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.flopService.getFlop(+params.get("id")).subscribe((flop) => {
        this.flop = flop;
      });
    });
  }
}
