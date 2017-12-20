import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	repositoryDetails: any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute, private sharedService: SharedService, private _location: Location) { 
  }

  ngOnInit() {
  	const id = this.activatedRoute.snapshot.params['id'];
  	const repositoriesData = this.sharedService.listOfRepositories; 
  	if(repositoriesData){
  		const details = repositoriesData.filter(function(x){
  			return x.id == id;
  		}).map(function(y){
  				return y;
  			}
  		);
  		this.repositoryDetails = details[0];
  	}
  }
  goToResultsPage() {
        this._location.back();
    }

}
