import Image from "next/image";
import styles from "./homepage.module.css"
import HomepagePic from "/public/HomepagePic.jpg"

const HomePage = () => {
  return (
    <div>
     <div  className={styles.Container} > 
      <div className={styles.HomepageImgContainer}>
        <Image src={HomepagePic} alt="HomepagePictures" priority={true} className={styles.HomepageImg}/>
      
      <div  className={styles.AnimationCon} >
     <div className={styles.TextOne}> <p>Mariage</p></div>

     <div  className={styles.TextTwo}> <p>Fête D'anniversaire</p></div>

     <div className={styles.TextThree}> <p>Portrait</p></div>

     <div  className={styles.TextFour}> <p>Communion</p></div>

     <div className={styles.TextFive}> <p>Fête de révélation de bébé</p></div>
    </div>
    </div>
    </div>  
    </div>  
  )
}

export default HomePage;
