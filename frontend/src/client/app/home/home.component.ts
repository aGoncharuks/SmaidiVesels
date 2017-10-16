import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  public answer: number;

  public options: any[] = [
    {
      text: 'Pilnīgi pārliecināts, ka netīrīšu',
      value: 1
    },
    {
      text: 'Daļēji pārliecināts, ka netīrīšu',
      value: 2
    },
    {
      text: 'Daļēji pārliecināts, ka tīrīšu',
      value: 3
    },
    {
      text: 'Pilnīgi pārliecināts, ka tīrīšu',
      value: 4
    },
  ];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * On init
   */
  ngOnInit() {

  }

}
