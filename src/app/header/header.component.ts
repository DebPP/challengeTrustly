import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showBack: boolean = false;
  route;
  constructor(
    private activeRoute: ActivatedRoute) {
   
    
 
  }
  ngOnInit(): void {
  }

}
