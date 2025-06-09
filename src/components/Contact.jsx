import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          setStatus('error');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label className="text-sm">Name</label>
        <input 
          type="text" 
          name="from_name" 
          required
          className="bg-white/5 border border-white/10 rounded-lg p-2 focus:outline-none focus:border-white/20"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">Email</label>
        <input 
          type="email" 
          name="from_email" 
          required
          className="bg-white/5 border border-white/10 rounded-lg p-2 focus:outline-none focus:border-white/20"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">Message</label>
        <textarea 
          name="message" 
          required
          className="bg-white/5 border border-white/10 rounded-lg p-2 focus:outline-none focus:border-white/20 min-h-[100px]"
        />
      </div>
      <button 
        type="submit" 
        disabled={status === 'sending'}
        className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-2 mt-2 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="text-green-500 text-sm">Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>}
    </form>
  );
};