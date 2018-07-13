import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model'; 

@Injectable()
export class RentalService{
    private rentals: Rental[] = [
        {
        id: "1",
        title: "Central Apartment 1",
        city: "New York",
        street:"Times Sqaure",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very beautiful apartment in Center",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: "2",
        title: "Central Apartment 2",
        city: "San Francisco",
        street:"Main street",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very beautiful condo on Main street",
        dailyRate: 12,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: "3",
        title: "Central Apartment 3",
        city: "Riga",
        street:"Gertrudes iela",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very beautiful apartment in Center of Riga",
        dailyRate: 29,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: " ",
        title: "Central Apartment 4",
        city: "Berlin",
        street:"Haupt strasse",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 4,
        description: "Very beautiful house",
        dailyRate: 434,
        shared: false,
        createdAt: "24/12/2017"
      },];

      public getRentalById(rentalId:string) : Observable<Rental>{
        return new Observable<Rental> ((observer)=>{
           setTimeout(()=>{
            const foundRental = this.rentals.find((rental) => {
              return rental.id == rentalId;
            });
            observer.next(foundRental);
           },500)
        });
      }
         


      public getRentals(): Observable<Rental[]> {
        const rentalObservable:Observable<Rental[]> = new Observable((observer) => {
              setTimeout(() => {
                observer.next(this.rentals);
              }, 1000);

              setTimeout(() => {
                observer.error("I am error");
              }, 2000);

              setTimeout(() => { 
                observer.complete();
              }, 3000);
        });
        return rentalObservable;
      }
} 