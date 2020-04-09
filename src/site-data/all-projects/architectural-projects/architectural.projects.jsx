import DynamicHousingTower from './dht-images.data';
import GlobalSchool from './gs-images.data';
import HolyKidsInternational from './hkis-images.data';
import CommercialTower from './ct-images.data';
import ModernHighRiseHousing from './mhrh-images.data';
import RooftopPavilion from  './rp-images.data';
import SeasidePavilion from './ssp-images.data';
import LinearLuxuryVilla from './llv.images.data';
import ResedentialApartments from './ra-images.data'

const project1 = {
    id:'adht',
    feature:true,
    title:'Dynamic Housing Tower',
    epc:'30 Crores',
    cover: DynamicHousingTower.tile[0],
    modal:DynamicHousingTower,
    status:'Proposed',
    location:'Lucknow, India',
    description:'Dynamicsm is an idea to create this housing communial. Thus will hepls the users to enjoy the enviornment in all seasonal aspects.'
}
const project2= {
    id:'ags',
    feature:true,
    title:'Global School',
    epc:'20 Crores (Including Infra)',
    cover:GlobalSchool.tile[0],
    modal:GlobalSchool,
    status:'Proposed',
    location:'Lucknow, India',
    description:'The Idea is to create an Inspirational Educational Infrastrcuture for the city & neighbopurhood.'
}
const project3 = {
    id:'ara',
    feature:false,
    title:'Residential Apartment',
    epc:'2.5 Crores',
    cover:ResedentialApartments.tile[0],
    modal:ResedentialApartments,
    status:'Completed',
    location:'Lucknow, India',
    description:''
}
const project4 = {
    id:'ahkis',
    feature:true,
    title:'Holy Kids International School',
    epc:'6.5 Crores',
    cover:HolyKidsInternational.tile[0],
    modal: HolyKidsInternational,
    status:'Ongoing',
    location:'Raebareilly, India',
    description:''
}
const project5 = {
    id:'act',
    feature:true,
    title:'Commercial Tower',
    epc:'10 Crore',
    cover:CommercialTower.tile[0],
    modal:CommercialTower,
    status:'Proposed',
    location:'Lucknow, India',
    description:'The Idea is to create an Modern Corporate tower in the vicinity of the city.'
}
const project6 = {
    id:'amhrh',
    feature:false,
    title:'Modern High Rise Housing',
    epc:'NA',
    cover:ModernHighRiseHousing.tile[0],
    modal:ModernHighRiseHousing,
    status:'Proposed',
    location:'Lucknow India',
    description:'The Idea is to create an Modern Architecture with a blend of qaulity of Life & with personalized Covered ,\
    Semi open & open spaces'
}
const project7 = {
    id:'arp',
    feature:true,
    title:'Rooftop Pavilion',
    epc:'',
    cover: RooftopPavilion.tile[0],
    modal:RooftopPavilion,
    status:'Proposed',
    location:'Lucknow, India',
    description:'The Idea is to create a modern & architecturally rich shelter to accomodate any activity such as restaurant & Bar at any premium rooftop'
}
const project8 = {
    id:'',
    feature:false,
    title:'Seaside Pavilion',
    epc:'',
    cover:SeasidePavilion.tile[0],
    modal:SeasidePavilion,
    status:'Proposed',
    location:'Goa, India',
    description:'The Idea is to create a blend of semi covered & open spaces at the beach & make beaches more fun.'
}
const project9 = {
    id:'allv',
    feature:true,
    title:'Linear Villa Luxury',
    epc:'',
    cover:LinearLuxuryVilla.tile[0],
    modal:LinearLuxuryVilla,
    status:'',
    location:'',
    description:''
}

// const project11 = {
//     id:'',
// feature:false,
//     title:'',
//     epc:'',
//    '' cover:,
// status:'',
//     location:'',
//     description:''
// }
const Architectural = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    // project10
]

export default Architectural;