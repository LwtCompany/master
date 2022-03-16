import {User} from './User';
import {Company} from './Company';
import {CustomMap} from './CustomMap';

const user = new User();
const company = new Company();
const myMap = new CustomMap("map");

myMap.addMarker(user);
myMap.addMarker(company);



