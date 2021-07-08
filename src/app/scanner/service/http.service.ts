import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DALService } from 'src/app/common/dal.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends DALService {

  constructor(http:HttpClient) { 
    super(http);
  }
  
  verifyUser(url:string){
   return this.executeGet(url);
  }
}
