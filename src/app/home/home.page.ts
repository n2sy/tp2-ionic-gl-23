import { Component } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabCourses = [];
  constructor(private courseSer: ListCoursesService) {}

  ngOnInit() {
    this.tabCourses = this.courseSer.getAllCourses();
  }
}
