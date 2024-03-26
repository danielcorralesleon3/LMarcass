export type Razas = Razas2[]

export interface Razas2 {
  weight: Weight
  id: string
  name: string
  cfa_url?: string
  vetstreet_url: string
  vcahospitals_url?: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap?: number
  alt_names: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url: string
  hypoallergenic: number
  reference_image_id: string
  image: Image
}

export interface Weight {
  imperial: string
  metric: string
}

export interface Image {
  id: string
  width: number
  height: number
  url: string
}

/*  export default function Breeds() {
    const [razas, setRazas] = React.useState<Razas>([]);
  
    React.useEffect(() => {
      fetch("https://api.thecatapi.com/v1/breeds").then((response) => response.json()).then((data: Razas2[]) =>{
          setRazas(data);
        })
    }, []);
  
    return<>{razas.map((raza, i) => {
    return <p>{raza.name}</p>;})}</>}*/


// src/components/Breeds.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => setBreeds(data))
      .catch(error => console.error('Error fetching breeds:', error));
  }, []);

  return (
    <div>
      <h1>Razas de Gatos</h1>
      <ul>
        {breeds.map(breed => (
          <li key={breed.id}>
            <Link to={`/breeds/${breed.id}`}>{breed.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breeds;
