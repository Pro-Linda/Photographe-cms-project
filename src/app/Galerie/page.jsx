
"use client"

import styles from "./galerie.module.css";
import { picturesData } from "@/components/PicturesData/picturesData"
import Image from "next/image";
import { useState, useEffect } from "react";


function GaleriePage() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect (() => {
    setData(picturesData);
    setCollection([... new Set (picturesData.map((item) => item.title))])
  },[])

  const gallery_filter = (itemData) =>{
    const filterData = picturesData.filter((item)=> item.title ==itemData);
      setData(filterData); 
  }

return (

  <div className={styles.Galerie}>
    <div className={styles.galerieWrapper}>

      <h1 className={styles.GalerieName}> Galerie</h1>

      
      <div className={styles.FilterItem}>
        <ul>
          <li><button className={styles.AllButton} onClick={()=> setData(picturesData)}>All</button></li>
           {
            collection.map((item)=> 
            <li key={item} >
              <button className={styles.FilterButton}  onClick={()=>{gallery_filter(item)}}>{item}</button>
              </li>
            )}
        </ul>
      </div>

      <div className={styles.galerieContainer}>
        {
          data.map((item)=> 
          <div key={item.id} > 
          <Image src={item.Image}  alt={item.title} width={500} height={100} priority={true} className={styles.GalerieImage} /> 
          </div>)  
        }

         </div>
      </div> 
  </div>
);
}

export default GaleriePage ;