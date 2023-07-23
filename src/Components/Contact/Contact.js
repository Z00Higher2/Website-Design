import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';import './Contact.css'

const Contact = () =>{
    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <div>
            <div className="container">
                <div className= "Contact">
                    <h2 data-aos="fade-up">Contact Us</h2>
                    <p data-aos="fade-up">Swing by for a cup of coffee, or leave us a message:</p>
                </div>
                <div className="row">
                    <div className="column">
                    <form action="/action_page.php">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        <label for="country">Country</label>
                        <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Contact;