import faker from '@withshepherd/faker'
import {Mappable} from './CustomMap'

export class User implements Mappable{
  name: string;
  location: {
    lat: number,
    lng: number
  }

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent():string{
    return `<div> User Name: <h2>${this.name}</h2></div>`
  }
}