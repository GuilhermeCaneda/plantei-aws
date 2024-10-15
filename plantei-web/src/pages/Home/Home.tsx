import SectionGreenSide from "./components/SectionGreenSide/GreenSide"
import HomeSteps from "./components/HomeSteps/HomeSteps"
import SectionStore from "./components/SectionStore/SectionStore"
import "./Home.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import { Plant } from "@Types/Plant";
import { API_URLS } from '@Types/Api';

const Home = () => {   
  const [plants, setPlants] = useState<Plant[]>([]);
  const [status, setStatus] = useState<string>('');
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setStatus('Loading...');
        const response = await axios.get(API_URLS.getPlants);
        setPlants(response.data);
      } catch (err) {
        setStatus("We couldn't find the data at this time. Please try again later.")
        console.log(err)
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="home-container">
        <SectionGreenSide/>
        <HomeSteps/>
        <SectionStore plants={plants} status={status}/>
    </div>
  )
}

export default Home