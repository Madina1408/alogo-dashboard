import Riyadh from '../../assets/CitiesImage/riyadh.png';
import Jeddah from '../../assets/CitiesImage/jeddah.png';
import Dammam from '../../assets/CitiesImage/dammam.png';

const CitiesData =[
{
  id:1,
  cityName:'Riyadh',
  activeUsers:'250K',
  image: <img src={Riyadh} alt="Riyadh" />,
  bg:'#F5AD9E'
},
{
  id:2,
  cityName:'Jeddah',
  activeUsers:'150K',
  image: <img src={Jeddah} alt="Jeddah" />,
  bg:'#B78CA2'
},
{
  id:3,
  cityName:'Dammam',
  activeUsers:'50K',
  image: <img src={Dammam} alt="Dammam" />,
  bg:'#C8DCDA'
}
]

export default CitiesData