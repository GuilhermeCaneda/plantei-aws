import './Product.css'
import ImgPlant from "@Assets/home/img-plant.png"
import ProductInfo from './components/ProductInfo/ProductInfo'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Plant } from '@Types/Plant';
import { useNavigate, useParams } from "react-router-dom";
import { API_URLS } from '@Types/Api';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [plant, setPlant] = useState<Plant | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get(`${API_URLS.getPlant}${id}`);
        if (id) {
          setPlant(response.data || null);
        } else {
          setPlant(null);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchPlants();
  }, [id]);

  useEffect(() => {
    if (!isLoading && plant === null) {
      navigate('/error');
    }
  }, [isLoading, plant, navigate]);

  return (
    <section className='product-container'>
      {isLoading ? (
        <p className='product-loading'>Loading...</p>
      ) : (
        <div className='product-content'>
          <img src={ImgPlant} alt="" />
          {plant && <ProductInfo plant={plant} />}
        </div>
      )}
    </section>
  );
}

export default Product;
