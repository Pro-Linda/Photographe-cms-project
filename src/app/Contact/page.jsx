import Image from "next/image";
import styles from "./contact.module.css"
import HireMe from "/public/HireMe.jpg"

const ContactPage = () => {
  return (
    <div>
      <h1 className={styles.ContactName}>Contact</h1>
      <div className={styles.ContactContainer}>
      
      
        <div className={styles.ImgContainer}>
        
       
         <Image src={HireMe} alt="Image"  className={styles.ImgPhotograph} priority={true} />
       
         <div className={styles.ImgText}>
         <h2>
         Engagez moi!
         </h2>
         <br/> 
         <br/> 
        
         Envoyez-moi un message si vous avez des questions ou 
         si vous souhaitez planifier une séance photo personnalisée.
        </div>
        </div>
      <div className={styles.FormContainer}>   
       <div className={styles.Formular}>
          <form action="https://formspree.io/f/mdoqgjol" method="POST" >
            <input
              type="text"
              name="name"
              id="firstname"
              required
              placeholder="First Name"
              className={styles.FormularName}/>


            <input
              type="text"
              name="name"
              id="secondname"
              required
              placeholder="Last Name"
              className={styles.FormularName}/>

            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className={styles.FormularMail}/>

            <input
              type="text"
              name="name"
              id="number"
              required
              placeholder="Phone Number (Optional)"
              className={styles.FormularPhone}/>

            <textarea
              name="message"
              id="message"
              required
              placeholder="Message..."
              rows="10"
              cols="108"
              className={styles.FormularMessage}>
              </textarea>

            <button className={styles.FormularButton} type="submit">Submit</button>
          </form>
        </div>
        </div>
        </div>

    </div>

    
  )
}

export default ContactPage;
