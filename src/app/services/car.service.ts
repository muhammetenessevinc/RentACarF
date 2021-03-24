import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl ="https://localhost:44313/api/";
  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getallcardetails"
   return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

   getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
   }


   getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
   }

   getCarsByColorAndBrand(colorId:number,brandId:number) : Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolorandbrand?colorId=" + colorId + "&brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
   

  getCarDetail(carId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  
}
