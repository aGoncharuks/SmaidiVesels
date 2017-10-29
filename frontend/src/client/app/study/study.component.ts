import { Component, OnInit } from '@angular/core';
import { StudyService } from './study.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-study',
  templateUrl: 'study.component.html',
  styleUrls: ['study.component.css']
})
export class StudyComponent implements OnInit {

  public content: string;
  private contentId: number;

  constructor(
    private studyService: StudyService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {

    this.activatedRoute.params
      .subscribe((params) => {
        this.contentId = params.contentId;

        /**
         * Get study content by id
         */
        this.studyService.getStudyContent(this.contentId)
					.subscribe((next: string) => {
            this.content = next;
          });
      });

  }
}
