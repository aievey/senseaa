import CafeHomies from './ch-images.data';
import DamagedCafe from './dc-images.data';
import TubeHouseSmartInteriors from './thsi-images.data';

const int1 = {
    id:'ihc',
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
    title:'Damaged Café Lucknow',
    epc:'25 Lac',
    cover:DamagedCafe.tile[0],
    modal:DamagedCafe,
    status:'Completed, 2018',
    location:'Lucknow, India',
    description:''
}
const Interior = [
    int1,
    int2,
    int3
]

export default Interior;