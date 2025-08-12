import React, { JSX } from 'react';
import styles from './ContactForm.module.css';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function ContactForm(): JSX.Element {
  // --- IMPORTANT: REPLACE WITH YOUR DETAILS ---
  const whatsAppNumber = '5511999999999'; // Use your number with country code, no '+' or spaces
  const linkedInProfile = 'patricio-cordeiro-04040839'; // Your LinkedIn profile username

  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className='section-title'>Let's Build Something Great</h2>
          <p className={styles.subtitle}>
            Ready to bring your project to life? I'm available for new freelance
            opportunities.
          </p>
        </div>

        <div className={styles.formContainer}>
          <form name='contact' method='POST' data-netlify='true'>
            <input type='hidden' name='form-name' value='contact' />
            <h3 className={styles.formTitle}>Send a Project Brief</h3>
            <div className={styles.formGroup}>
              <input type='text' name='name' placeholder='Your Name' required />
            </div>
            <div className={styles.formGroup}>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name='message'
                placeholder='Describe your project, goals, and challenges...'
                rows={5}
                required></textarea>
            </div>
            <button type='submit' className={styles.submitButton}>
              Start the Conversation
            </button>
          </form>

          <div className={styles.directContact}>
            <div className={styles.divider}>
              <span>OR</span>
            </div>
            <p className={styles.directContactText}>
              For a quicker inquiry, reach out directly:
            </p>
            <div className={styles.socialIcons}>
              <a
                href={`https://wa.me/${whatsAppNumber}`}
                target='_blank'
                rel='noopener noreferrer'
                className={`${styles.iconButton} ${styles.whatsapp}`}
                aria-label='Contact on WhatsApp'>
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <a
                href={`https://www.linkedin.com/in/${linkedInProfile}`}
                target='_blank'
                rel='noopener noreferrer'
                className={`${styles.iconButton} ${styles.linkedin}`}
                aria-label='Contact on LinkedIn'>
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
