import faker from '@withshepherd/faker';
import {Mappable} from './CustomMap'

export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location:{
    lat: number,
    lng: number
  }

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent():string{
    return `User Name: ${this.companyName}`
  }
}