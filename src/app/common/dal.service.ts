import { HttpClient } from '@angular/common/http';

export abstract class DALService {
  constructor(private http:HttpClient) {}
   executeGet(url:string){
    return this.http.get(url)
   }
   executePost(url:string,data:any){
     return this.http.post(url,data);
   }
}
