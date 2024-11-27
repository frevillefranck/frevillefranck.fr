import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Récupère l'année en cours
  return (
    <footer className="bg-black text-light py-4">
      <Container className="text-center">
        {/* Section Réseaux Sociaux */}
        <div className="mb-4">
          <h5>Suivez-moi</h5>
          <div className="d-flex justify-content-center">
            <a
              href="https://linkedin.com/in/franckfreville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light social-icon linkedin"
            >
              <FaLinkedin className="icon-size" />
            </a>
            <a
              href="https://github.com/franckfreville"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light social-icon github"
            >
              <FaGithub className="icon-size" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61569739731832"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light social-icon facebook"
            >
              <FaFacebook className="icon-size" />
            </a>
          </div>
        </div>

        {/* Crédits */}
        <small>© {currentYear} Franck Fréville. Tous droits réservés.</small>
      </Container>

      {/* Styles CSS */}
      <style jsx>{`
        .footer-link {
          transition: color 0.3s, border-bottom 0.3s;
          border-bottom: 2px solid transparent;
        }
        .footer-link:hover {
          color: #00bfff;
          border-bottom: 2px solid #00bfff;
        }

        .social-icon {
          transition: transform 0.3s, color 0.3s;
          margin: 0 10px;
        }
        .social-icon:hover {
          transform: scale(1.2);
        }
        .linkedin:hover {
          color: #0077b5 !important; /* Couleur LinkedIn */
        }
        .github:hover {
          color: #5c6bc0 !important; /* Blanc pour GitHub */
        }
        .facebook:hover {
          color: #1877f2 !important; /* Bleu Facebook */
        }

        .icon-size {
          font-size: 22px;
        }

        @media (min-width: 768px) {
          .icon-size {
            font-size: 28px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
