import { Component } from '@angular/core';
import { VisitDetailButtonComponent } from "../visit-detail-button/visit-detail-button.component";

@Component({
  selector: 'app-sidebar',
  imports: [VisitDetailButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
