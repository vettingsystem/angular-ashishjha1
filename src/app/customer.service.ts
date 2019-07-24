import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerList: any;
  constructor(private http: HttpClient) { }

public getData(): any {

return this.http.get('https://www.w3schools.com/angular/customers.php').pipe(map(res => {
return this.customerList = res;
  }));

}

}
