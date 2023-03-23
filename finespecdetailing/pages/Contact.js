import React from "react";
import Container from "@mui/material/Container";
import styles from "../Styles/Contact.module.css";
import { Button } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Container component="main" maxWidth="xl" className={styles.Container}>
        <h1 className={styles.Font}>Contact Us</h1>
            <p style={{fontSize: '1.5rem'}}>
                Call anytime to book an appointment today 
                <Button                 
                href="tel:484-655-9375"
                sx={{ display: "flex", justifyContent: "center", alignContent: 'center', height: '10px', width: '20%', p: 5, mt: 2, fontSize: '1rem' }}
                 >Click To Call</Button>
            </p>
        <h1 className={styles.Font}>About Us</h1>
        <p style={{fontSize: '1.5rem'}}>
          At Fine Spec Detailing, we believe that every vehicle deserves the
          best care and attention. Our passion for auto detailing began as a
          hobby, and has since turned into a thriving business that serves car
          enthusiasts and everyday drivers alike. Our team consists of
          experienced professionals who take pride in their work and are
          dedicated to providing the highest quality detailing services. From
          exterior washing and waxing to interior deep cleaning and restoration,
          we use only the best products and techniques to ensure your vehicle
          looks and feels its best. At Fine Spec Detailing, we understand that
          your time is valuable, which is why we offer convenient scheduling
          options and efficient service without sacrificing quality. We are
          committed to earning your trust and satisfaction, and strive to exceed
          your expectations every time you visit us. Thank you for considering
          Fine Spec Detailing for your auto detailing needs. We look forward to
          serving you and your vehicle.
        </p>
        <h1 className={styles.Font}>Location</h1>
        <p style={{fontSize: '1.5rem'}}>We are located in Delco County PA</p>
        <h1 className={styles.Font}>Privacy policy</h1>
        <p>
          Fine Spec Detailing ("we," "us," "our") respects the privacy of our
          customers and is committed to protecting their personal information.
          This Privacy Policy describes how we collect, use, and share personal
          information when you visit our website. Information we collect We may
          collect personal information from you when you visit our website, such
          as your name, email address, phone number, and other contact
          information. We may also collect non-personal information such as your
          IP address, browser type, and operating system. How we use your
          information We use your personal information to provide you with the
          services you request, such as scheduling appointments and processing
          payments. We may also use your information to communicate with you
          about our services, promotions, and other updates. We do not sell or
          share your personal information with third parties for marketing
          purposes. We may share your information with trusted third-party
          service providers who help us operate our website and provide our
          services. These service providers are contractually obligated to
          protect your personal information and may only use it for the purposes
          of providing services to us. We may also share your information as
          required by law or in response to legal process, including subpoenas
          and court orders. Data retention We will retain your personal
          information for as long as necessary to provide our services and
          fulfill the purposes described in this Privacy Policy. We may also
          retain and use your information as necessary to comply with our legal
          obligations, resolve disputes, and enforce our agreements. Your rights
          You have the right to access and update the personal information we
          have about you. You may also request that we delete your personal
          information or restrict how it is used. To exercise these rights,
          please contact us using the information provided below. Cookies and
          other tracking technologies We use cookies and other tracking
          technologies to collect non-personal information about your visit to
          our website. These technologies may collect information such as your
          IP address, browser type, and operating system. You can choose to
          disable cookies through your browser settings, but this may affect the
          functionality of our website. Changes to this policy We may update
          this Privacy Policy from time to time to reflect changes in our
          practices or legal obligations. We will post the updated policy on our
          website and indicate the date it was last revised. Contact us If you
          have any questions or concerns about this Privacy Policy, please
          contact us at finespecdetailing@gmail.com.
        </p>
        <h1 className={styles.Font}>Terms and Conditions</h1>
        <p>
          These Terms and Conditions ("Agreement") govern your use of the car
          detailing services offered by Fine Spec Detailing ("we," "us," "our").
          By scheduling a car detailing appointment with us, you agree to be
          bound by this Agreement. Description of services We offer car
          detailing services that may include exterior washing and waxing,
          interior cleaning, and other related services as agreed upon. We will
          provide these services to you with reasonable care and skill, but we
          do not guarantee any specific results or outcomes. Payment and
          cancellation You agree to pay the full price for the services you
          receive. Payment is due at the time of service, unless otherwise
          agreed upon. If you need to cancel or reschedule your appointment, you
          must provide us with at least 24 hours notice. Failure to do so may
          result in a cancellation fee. Liability We are not liable for any
          damage or loss to your vehicle or any personal property that may occur
          during the course of our services, except to the extent caused by our
          gross negligence or willful misconduct. You assume all risk of loss or
          damage to your vehicle or personal property, and you release us from
          any liability for such loss or damage. Indemnification You agree to
          indemnify and hold us harmless from any claims, damages, or losses
          arising out of or related to your use of our services, including any
          claims by third parties. Disclaimer of warranties We make no
          warranties, express or implied, with respect to our services,
          including but not limited to any implied warranties of merchantability
          or fitness for a particular purpose. Governing law and jurisdiction
          This Agreement is governed by and construed in accordance with the
          laws of [insert state/country]. Any disputes arising out of or related
          to this Agreement shall be resolved in the courts located in [insert
          county and state/country]. Modifications to this Agreement We may
          modify this Agreement at any time by posting the revised terms on our
          website. Your continued use of our services following any such
          modification constitutes your agreement to be bound by the revised
          terms. Entire agreement This Agreement constitutes the entire
          agreement between you and us with respect to the subject matter
          hereof, and supersedes all prior agreements and understandings,
          whether written or oral.
        </p>
      </Container>
    </>
  );
}
