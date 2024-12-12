import { Component } from '@angular/core';
import { FacultyComponent } from "../faculty/faculty.component";

@Component({
  selector: 'app-main-content',
  imports: [FacultyComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
