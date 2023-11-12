import { useState, useEffect } from 'react';

function Contact() {

    const [ emailBody, setEmailBody ] = useState("");

    // useEffect(() => {

    // },[]);
    function postForm(emailBody) {
        let email = { 
            body: emailBody,
            timestamp: new Date().getTime
        }
        fetch()
    };

    return (
        <section className="contact app-component">
            <h2>Contact</h2>
            <p>
                hmu
            </p>
            <div>
                <label htmlFor="emailBody">Message</label><br/>
                <textarea rows="10" name="email-message" value={emailBody} placeholder="Write your message here..."
                    onChange={e => setEmailBody(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Submit" onClick={postForm}/>
            </div>
        </section>
    )
}

export default Contact;