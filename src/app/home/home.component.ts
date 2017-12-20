import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:Http, private router: Router) { }

  ngOnInit() {
  }
  title = 'Github Search Application';
  results : any;
  noSearchResults:boolean = false;

  searchGithub(form:NgForm){
  	const searchKeyWord = form.value.searchValue;
        if(searchKeyWord){
           form.reset();
           const resultsData = {queryParams: searchKeyWord};
           this.router.navigate(["results"], { queryParams: {q:searchKeyWord} });
        }else{
          this.noSearchResults = true;
        }
  }

}
