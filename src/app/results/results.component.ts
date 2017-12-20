import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { Http } from '@angular/http';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute, private http:Http, private router: Router, private sharedService: SharedService) { }

  listOfRepositories = [];
  allRepositories = [];
  totalCount: number;
  isLoading: boolean = true;
  ngOnInit() {
  	this.activatedRoute.queryParams.subscribe(params => {
            this.http.get('https://api.github.com/search/repositories?q='+params.q)
    .map(res => res.json())
    .subscribe(
  		(data) => {
        this.isLoading = false;
  			this.totalCount = data.total_count;
        this.allRepositories = data.items;
  			this.listOfRepositories = data.items;
  		});
    });
  }
  onSelect(val){
    if(val == 'most_forks') {
      this.listOfRepositories = this.listOfRepositories.sort(function(a, b){
        return b.forks_count-a.forks_count;
      });
    }else if(val == 'few_forks'){
      this.listOfRepositories = this.listOfRepositories.sort(function(a, b){
        return a.forks_count-b.forks_count;
      });
    }else{
      this.listOfRepositories = this.allRepositories;
    }
    
  }
  goToHomePage(){
    this.router.navigate(["home"]);
  }
  ngOnDestroy() {
    this.sharedService.listOfRepositories = this.listOfRepositories; 
  }
 
}
