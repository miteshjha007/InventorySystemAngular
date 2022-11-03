import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  productList: [] = [];
  constructor(private http: HttpClient) { }
  postProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/productList/", data);
    // .subscribe((data) => {
    //   console.warn('Data inserted successfully.');
    // })
  }

  getProduct() {
    return this.http.get<any>("http://localhost:3000/productList/");
    // .subscribe((data) => {
    //   this.productList = data;
    // })
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/productList/" + id, data);
  }

  deleteData(id: number) {
    return this.http.delete<any>("http://localhost:3000/productList/" + id);
  }
}
