import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class SharedService {
  public listOfRepositories: any;
}