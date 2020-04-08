import tile1 from '../../../assets/projects/Planning/250X250/tile1.jpg';
import tile2 from '../../../assets/projects/Planning/250X250/tile2.jpg';
import main1 from '../../../assets/projects/Planning/1.jpg';
import main2 from '../../../assets/projects/Planning/2.jpg';

const planning2= {
    tile:[tile2],
    main:[main2]
}

const planning1 = {
    main:[main1],
    tile:[tile1]
}


const Planning =[
    {
        id:'prn',
        title:'Residential Neighbourhood',
        cover:tile1,
        modal:planning1,
        loction:'lucknow'
    },
    {
        id:'prh',
        title:'Row Housing',
        cover:tile2,
        modal:planning2,
        loction:'lucknow'
    }
]

export default Planning;