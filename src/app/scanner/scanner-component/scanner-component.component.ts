import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-scanner-component',
  templateUrl: './scanner-component.component.html',
  styleUrls: ['./scanner-component.component.scss']
})
export class ScannerComponentComponent implements OnInit {
  qrResultString: string ="";
  showScanner:boolean=false;
  displayModal:boolean=false;
  isVerified:boolean=false;
  isResult:boolean=false;
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
  }

  clearResult(): void {
    this.qrResultString = "";
  }

  onCodeResult(resultString: string) {
    this.displayModal=true;
    this.isResult=this.isVerified=false
    
    this.httpService.verifyUser(resultString).pipe().subscribe((isVerfied)=>{
        this.isResult=true;
        if(isVerfied==true){
          this.isVerified=true;
        }
    },
    error => {
      this.isResult=true;
      this.isVerified=false
    },
    )
  }

  openScanner(){
    this.displayModal=true;
  }
}
