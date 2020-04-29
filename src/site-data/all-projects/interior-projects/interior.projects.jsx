import CafeHomies from './ch-images.data';
import DamagedCafe from './dc-images.data';
import TubeHouseSmartInteriors from './thsi-images.data';
import HousingInterior from './h-images.data';

const int1 = {
    id:'ihc',
    feature:false,
    title:'Homies café Lucknow',
    epc:'15 Lac',
    cover:CafeHomies.tile[0],
    modal:CafeHomies,
    status:'Completed, 2018',
    location:'Lucknow, India',
    description:'Ecofriendly & cost-effective architecture technique has been used. Homely environment & simplicity in design and materials. Custom Design furniture & Installations'
}

const int2 = {
    id:'ithsi',
    feature:false,
    title:'Tube house smart interiors',    
    epc:'',
    cover:TubeHouseSmartInteriors.tile[0],
    modal:TubeHouseSmartInteriors,
    status:'Proposed',
    location:'',
    description:'The ideas is to create more responsive & smart interiors for a single person dwelling unit.'
}

const int3 = {
    id:'idc',
    feature:false,
    title:'Damaged Café Lucknow',
    epc:'25 Lac',
    cover:DamagedCafe.tile[0],
    modal:DamagedCafe,
    status:'Completed, 2018',
    location:'Lucknow, India',
    description:''
}
const int4 ={
    id:'idc',
    feature:false,
    title:'Housing Interior',
    epc:'',
    cover:HousingInterior.tile[0],
    modal:HousingInterior,
    status:'',
    location:'',
    description:''
}
const Interior = [
    int1,
    int2,
    int3,
    int4
]

export default Interior;