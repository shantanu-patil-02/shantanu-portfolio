import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [sending, setSending] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'sent' | 'fallback'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyDraft = () => {
    const fullDraft = `To: ${PERSONAL_INFO.email}
From: ${formData.name} <${formData.email}>
Subject: ${formData.subject || 'Portfolio Inquiry'}

${formData.message}`;
    navigator.clipboard.writeText(fullDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const getGmailWebUrl = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Shantanu,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email
    )}&su=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setApiErrorMessage('');

    // Official Web3Forms submission using FormData (required by Web3Forms free tier)
    if (PERSONAL_INFO.web3formsAccessKey) {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('access_key', PERSONAL_INFO.web3formsAccessKey);
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('subject', formData.subject || `Portfolio Contact Inquiry from ${formData.name}`);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('from_name', 'Shantanu Patil Portfolio');

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formDataToSend,
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setSending(false);
          setSubmittedStatus('sent');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        } else {
          // If Web3Forms returned an error (e.g. unverified key, rate limit, etc.)
          console.warn('Web3Forms response:', result);
          setApiErrorMessage(result.message || 'Submission could not be completed via Web3Forms.');
        }
      } catch (err) {
        console.warn('Web3Forms network error:', err);
        setApiErrorMessage('Network error connecting to Web3Forms.');
      }
    }

    // Fallback if Web3Forms fails or is unverified:
    setSending(false);
    setSubmittedStatus('fallback');

    // Also trigger default mailto as backup:
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#171918]/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-heading"
    >
      <div
        className="relative w-full max-w-2xl bg-[#F3F0E8] border border-[#D6D0C5] shadow-2xl p-6 sm:p-10 text-[#171918]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#5E5B55] hover:text-[#171918] transition-colors cursor-pointer"
          aria-label="Close contact dialog"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="font-mono text-[11px] tracking-[0.22em] text-[#8E8B84] uppercase font-medium block mb-2">
            INITIATE CONVERSATION
          </span>
          <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl text-[#171918] mb-2">
            Let's connect.
          </h2>
          <p className="font-sans text-sm text-[#5E5B55] max-w-lg">
            Messages are delivered directly to Shantanu's inbox at{' '}
            <strong className="text-[#171918] font-mono">{PERSONAL_INFO.email}</strong>.
          </p>
        </div>

        {/* Quick Email Direct Access Strip */}
        <div className="bg-[#EAE6DC] p-4 border border-[#D6D0C5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <span className="font-mono text-[10px] tracking-wider text-[#8E8B84] uppercase block">
              Direct Destination
            </span>
            <span className="font-mono text-sm font-medium text-[#171918]">
              {PERSONAL_INFO.email}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="bg-[#171918] text-[#F3F0E8] font-mono text-[11px] tracking-wider px-3.5 py-1.5 uppercase hover:bg-[#2A2E2C] transition-colors shrink-0 cursor-pointer"
            >
              {copiedEmail ? 'Copied ✓' : 'Copy Email'}
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="border border-[#171918] font-mono text-[11px] tracking-wider px-3.5 py-1.5 uppercase text-[#171918] hover:bg-[#171918]/5 transition-colors shrink-0"
            >
              Open Mail App ↗
            </a>
          </div>
        </div>

        {/* Interactive Delivery State */}
        {submittedStatus === 'sent' ? (
          <div className="py-10 text-center bg-[#EAE6DC]/60 border border-[#D6D0C5] p-6 space-y-3">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#171918] text-[#F3F0E8] flex items-center justify-center font-bold">
              ✓
            </div>
            <h3 className="font-serif text-2xl text-[#171918]">Message Sent Successfully!</h3>
            <p className="font-sans text-xs text-[#5E5B55] max-w-md mx-auto">
              Your inquiry has been dispatched to <strong>{PERSONAL_INFO.email}</strong>. Shantanu will review it and reply as soon as possible.
            </p>
            <button
              onClick={() => {
                setSubmittedStatus('idle');
                onClose();
              }}
              className="mt-4 bg-[#171918] text-[#F3F0E8] font-mono text-xs px-5 py-2 uppercase tracking-wider cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : submittedStatus === 'fallback' ? (
          <div className="py-8 bg-[#EAE6DC]/60 border border-[#D6D0C5] p-6 space-y-4">
            <h3 className="font-serif text-xl text-[#171918]">Inquiry Draft Ready</h3>
            
            {apiErrorMessage && (
              <div className="p-3 bg-amber-500/10 border border-amber-600/30 text-amber-900 font-mono text-[11px] leading-relaxed">
                Notice: {apiErrorMessage}
              </div>
            )}

            <p className="font-sans text-xs text-[#5E5B55] leading-relaxed">
              Your mail app was opened with the pre-filled message addressed to <strong>{PERSONAL_INFO.email}</strong>. If your system didn't open a client automatically, choose one of these options:
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={getGmailWebUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171918] text-[#F3F0E8] font-mono text-xs px-4 py-2 uppercase tracking-wider hover:bg-[#2A2E2C] transition-colors inline-flex items-center gap-2"
              >
                <span>Send with Gmail in Browser</span>
                <span>↗</span>
              </a>

              <button
                onClick={handleCopyDraft}
                className="border border-[#171918] font-mono text-xs px-4 py-2 uppercase tracking-wider text-[#171918] hover:bg-[#171918]/5 transition-colors cursor-pointer"
              >
                {copiedDraft ? 'Draft Copied ✓' : 'Copy Full Message Text'}
              </button>

              <button
                onClick={() => setSubmittedStatus('idle')}
                className="font-mono text-xs text-[#5E5B55] hover:text-[#171918] px-2 py-2 uppercase tracking-wider cursor-pointer underline"
              >
                Edit Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[10px] tracking-wider uppercase text-[#5E5B55] block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Chen"
                  className="w-full bg-white border border-[#D6D0C5] px-3.5 py-2.5 font-sans text-sm text-[#171918] focus:outline-hidden focus:border-[#171918]"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] tracking-wider uppercase text-[#5E5B55] block mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-white border border-[#D6D0C5] px-3.5 py-2.5 font-sans text-sm text-[#171918] focus:outline-hidden focus:border-[#171918]"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-[10px] tracking-wider uppercase text-[#5E5B55] block mb-1.5">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineering Internship / Project Discussion"
                className="w-full bg-white border border-[#D6D0C5] px-3.5 py-2.5 font-sans text-sm text-[#171918] focus:outline-hidden focus:border-[#171918]"
              />
            </div>

            <div>
              <label className="font-mono text-[10px] tracking-wider uppercase text-[#5E5B55] block mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello Shantanu, I came across your portfolio and wanted to reach out regarding..."
                className="w-full bg-white border border-[#D6D0C5] px-3.5 py-2.5 font-sans text-sm text-[#171918] focus:outline-hidden focus:border-[#171918] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-mono text-[11px] text-[#8E8B84]">
                Delivers directly to: {PERSONAL_INFO.email}
              </span>

              <button
                type="submit"
                disabled={sending}
                className="bg-[#171918] text-[#F3F0E8] font-mono text-xs tracking-widest px-7 py-3.5 uppercase hover:bg-[#2A2E2C] transition-colors cursor-pointer shrink-0 disabled:opacity-50"
              >
                {sending ? 'Dispatching...' : 'Dispatch Inquiry →'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
