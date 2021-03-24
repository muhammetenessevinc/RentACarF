import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

   apiUrl="https://localhost:44313/api/"
   constructor(private httpClient:HttpClient) { }

   getCarImageGetAll():Observable<ListResponseModel<CarImage>>
    {
    let newPath =this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
    }

    
   getCarImageByCarId(carId: number): Observable<ListResponseModel<CarImage>>{
     let newApiUrl = this.apiUrl + "carimages/getimagesbycarid?carId=" + carId;

     return this.httpClient.get<ListResponseModel<CarImage>>(newApiUrl);
  }
  
  
}
