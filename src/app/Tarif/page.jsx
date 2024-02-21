import styles from "./Tarif.module.css";
import Image from "next/image";
import portrait1 from "/public/Images/Portrait/portrait1.jpg";
import couple2 from "/public/Images/Couple/couple2.jpg";
import famille2 from "/public/Images/Famille/famille2.jpg";
import grossesse1 from "/public/Images/Grossesse/grossesse1.jpg";
import bebe1 from "/public/Images/Bebe/bebe1.jpg";
import bapteme1 from "/public/Images/Bapteme/bapteme1.jpg";

const TarifPage = () => {
  return (
    <div>
      <h1 className={styles.TarifName}>Tarif et Prestations</h1>
      <div className={styles.TarifContainer}>
        <p className={styles.FirstPrice}>
        <Image src={portrait1} alt="Portrait1" className={styles.ImgPortrait}/> 
         <b>{`| Juste moi | ................ 130 euros `}</b>
        {`Séance pour une personne, en extérieur ou en studio.`} 
         <br/>
         <br/>
         <br/>
         <br/>
         <Image src={couple2} alt="Couple2" className={styles.ImgCouple}/> 
         <b>{`| Pour deux | ............. 195 euros `}</b>
         Pour deux personnes, en extérieur ou en studio. 
         <br/>
         <br/>
         <br/>
         <br/>
         <Image src={famille2} alt="Famille2" className={styles.ImgFamille}/>  
         <b>{`| Famille | ................... 220 euros `}</b>
          {`Pour la famille ou les amis jusqu'à 4 personnes, en extérieur ou en studio 
          30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu&apos;à 2 ans). 
         `}</p>

        <p className={styles.SecondPrice}>
        <Image src={grossesse1} alt="Grossesse1" className={styles.ImgGrossesse}/>  
         <b>{`| Il était une fois | ........................... 160 euros `}</b>
         {`Photo de grossesse (À votre domicile, en extérieur ou en studio).`}
         <br/>
         <br/> 
         <br/>
         <br/>
         <Image src={bebe1} alt="Bebe1" className={styles.ImgBebe}/> 
         <b>{`| Mon bébé | ....................................... 100 euros `}</b>
         {`Photo d'enfant jusqu'à 3 ans (photo à domicile).`}
         <br/>
         <br/>
         <br/>  
         <br/>
         <Image src={bapteme1} alt="Bapteme1" className={styles.ImgBapteme}/> 
         <b>{`| J'immortalise l'événement | ....... sur mesure `}</b> 
         {`Prestation de mariage ou baptême sur devis`}
        </p>
      </div>
    </div>
  )
}

export default TarifPage;
