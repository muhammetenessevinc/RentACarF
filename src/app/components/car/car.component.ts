import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { CarImage } from 'src/app/models/carImage';
import { from } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  apiUrl = "https://localhost:44313";
  cars:CarDetailDto[]=[];
  dataLoaded = false;
  carImages: CarImage[] = [];
  
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        this.getCarsByColorAndBrand(params["colorId"],params["brandId"])
      }else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }


  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }


  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColorAndBrand(colorId: number,brandId:number) {
    this.carService.getCarsByColorAndBrand(colorId,brandId).subscribe((response)=> {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

    getCarImage(cars:CarDetailDto){

     if(cars.imagePath){
        return cars.imagePath
      }
      else{
        return 'default.jpg'
      }
    }
  
  
}
