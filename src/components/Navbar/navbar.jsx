import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
import instagram from "/public/instagram.svg";
import facebook from "/public/facebook.svg";
import envelope from "/public/envelope.svg";
import pinterest from "/public/pinterest.svg";
import Link from "next/link";





const Navbar = () => {



  
  return (
    
    <div className={styles.container}>
       
      <div className={styles.logoContainer} >
       <Link href="/" as={'/'}> 
       <Image src="/Logo.png" alt="Charles Cantin Logo " width={130} height={120} priority={true} className={styles.logo} />
       </Link>    
      </div>

      <div className={styles.mainNameC}><p>Charles Cantin</p></div>
      <div className={styles.mainNameP}><p>Photographe</p></div>
      <div className={styles.mainFunction}><p>MARIAGE | FÊTE | PORTAIT</p></div>


      <div className={styles.IconsContainer}> 
      <Image src={instagram} alt="Instagram Icon" className={styles.NavIcons}/> 
      <Image src={facebook} alt="facebook Icon" className={styles.NavIcons}/> 
      <Image src={envelope} alt="envelope Icon" className={styles.NavIcons}/> 
      <Image src={pinterest} alt="pinterest Icon" className={styles.NavIcons}/> 
      </div>

      <div></div>

      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar;
