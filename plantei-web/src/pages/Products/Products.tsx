import { useEffect, useState } from 'react';
import './Products.css'
import axios from 'axios';
import { Plant } from '@Types/Plant';
import HomeCard from '@Components/HomeCard/HomeCard';
import { API_URLS } from '@Types/Api';

const Products = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [status, setStatus] = useState<string>('');
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setStatus('Loading...');
        const response = await axios.get(API_URLS.getPlants);
        setPlants(response.data);
        setStatus('');
      } catch (err) {
        setStatus("We couldn't find the data at this time. Please try again later.")
        console.log(err)
      }
    };

    fetchPlants();
  }, []);
  
  const [inputName, setInputName] = useState<string>('');
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);

  useEffect(() => {
    if (plants !== null) {
      const filtered = plants.filter((plant) =>
        plant.name.toLowerCase().includes(inputName.toLowerCase())
      );
      setFilteredPlants(filtered); 
    }
  }, [inputName, plants]); 

  return (
    <section className='products-container'>
        <input type="text" placeholder='Write a plant name' onChange={(e) => setInputName(e.target.value)}/>
        <div className='products-gallery'>
            {filteredPlants.length > 0 ? (
                filteredPlants.map((item) => (
                    <HomeCard 
                        key={item._id}
                        id={item._id}
                        name={item.name} 
                        price={item.price} 
                        discount={item.discountPercentage}
                        label={item.label} 
                        type={item.type} 
                    />
                ))
            ) : <p>{status}</p>}
        </div>
    </section>
  )
}

export default Products