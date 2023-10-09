import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  constructor(private courseSer: ListCoursesService, private router: Router) {}

  ngOnInit() {}

  onSubmit(newCourse) {
    this.courseSer.addCourse(newCourse);
    this.router.navigateByUrl('/home');
  }
}
