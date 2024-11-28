import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

import { send } from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
export function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Fonction de validation d'email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Fonction de validation du formulaire
  const validateForm = () => {
    let formErrors = {};

    if (!nom.trim() || /[^a-zA-Z\s]/.test(nom) || nom.length < 2) {
      formErrors.nom =
        'Veuillez entrer un nom valide sans chiffres et au moins 2 caractères.';
    }

    if (!email.trim() || !validateEmail(email)) {
      formErrors.email = 'Veuillez entrer une adresse email valide.';
    }

    if (!message.trim() || message.length < 2) {
      formErrors.message =
        "Veuillez entrer un message d'au moins 2 caractères.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Gestion du changement de valeur du captcha
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Veuillez compléter le reCAPTCHA.');
      return;
    }

    if (validateForm()) {
      setIsSending(true);
      try {
        await send(
          'service_s2fys2v', // Remplacez par votre ID de service EmailJS
          'template_rb6utr4', // Remplacez par votre ID de template EmailJS
          { nom, email, message },
          'E1Y7s913cxGYK0b-w' // Remplacez par votre clé utilisateur EmailJS
        );
        setSuccessMessage('Votre message a été envoyé avec succès !');
        setNom('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } catch (error) {
        console.error("Erreur d'envoi :", error);
        setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      } finally {
        setIsSending(false);
      }
    }
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Parlons de votre projet
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600 mr-3" />
                  <span>freville.franck.dev@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600 mr-3" />
                  <span>+33 6 70 71 10 77</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600 mr-3" />
                  <span>Vendin-le-Vieil, France</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Nom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Envoyer
              </button>
              <ReCAPTCHA
                sitekey="6LfDzYwqAAAAACI9iE4mBHOl8Nps2MuyjfpAyQLJ"
                onChange={handleCaptchaChange}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
