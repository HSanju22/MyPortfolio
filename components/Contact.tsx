import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all fields before sending.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/shsanjeev321@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Portfolio Message from ${name}`
        })
      });

      const result = await response.json();
      if (response.ok && result.success === "true") {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'There was an error sending your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 font-sans text-black">
        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">06 / Contact</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Let's build <br /> something impactful.</h3>
          
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Drop me a line</p>
              <a 
                href={SOCIAL_LINKS.email} 
                className="text-2xl md:text-3xl font-light premium-link transition-all"
              >
                shsanjeev321@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Social Presence</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noopener noreferrer" className="text-lg font-medium premium-link">LinkedIn</a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-lg font-medium premium-link">GitHub</a>
                <a href={SOCIAL_LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="text-lg font-medium premium-link">LeetCode</a>
                <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-lg font-medium premium-link">X (Twitter)</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-black p-8 md:p-12 relative overflow-hidden">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Full Name" 
                required
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-3 transition-colors placeholder:text-gray-300 disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com" 
                required
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-3 transition-colors placeholder:text-gray-300 disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={4} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?" 
                required
                disabled={status === 'submitting'}
                className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-3 transition-colors placeholder:text-gray-300 resize-none disabled:opacity-50"
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="p-4 bg-zinc-100 border border-zinc-300 text-zinc-900 text-xs font-mono rounded">
                ✓ Message sent successfully! Thank you for getting in touch.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-mono rounded">
                ✕ Error: {errorMessage}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full py-4 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-24 text-center">
        <h4 className="text-2xl md:text-3xl font-light mb-8 italic">"Let’s build something impactful together."</h4>
        <a 
          href="#contact" 
          className="inline-block px-12 py-4 border-2 border-black text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
