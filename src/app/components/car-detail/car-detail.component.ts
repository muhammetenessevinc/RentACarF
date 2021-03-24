import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  dataLoaded = false;
  carDetail: CarDetailDto;
  carImages: CarImage[] = [];
  apiUrl = "https://localhost:44313/";

  constructor(private activatedRoute: ActivatedRoute,
    private carDetailService: CarService,
    private carImageService: CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if(param["carId"]){
        this.getCarDetailByCarId(param["carId"]);
        this.getCarImageByCarId(param["carId"]);
      }

      
    });
  }

  getCarDetailByCarId(carId: number){
    this.carDetailService.getCarDetail(carId)
    .subscribe((response) => {
      this.carDetail = response.data[0];
      console.log(this.carDetail);
    });
  }


  //  getCarImageByCarId(carId:number){
  //    this.carImageService.getCarImageByCarId(this.activatedRoute.snapshot.params["carId"])
  //      .subscribe((response) => {
  //        this.carImages = response.data;
  //        console.log(this.carImages);
  //      });
  //  }
  getCarImageByCarId(carId:number){
    this.carImageService.getCarImageByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      this.dataLoaded = true;
      console.log(response.data);
    })
  }


  

  sliderItemActive(index: number){
    if(index === 0){
      return "carousel-item active";
    }
    else{
      return "carousel-item";
    }
  } 
}
