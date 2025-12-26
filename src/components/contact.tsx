"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Mail, Phone, MapPin, Send, User, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { sendContactMessageAction, type ContactFormState } from '@/app/actions';

const initialState: ContactFormState = {
  message: '',
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      className="w-full font-bold btn-primary group relative"
      disabled={pending}
      size="lg"
    >
      <div className="flex items-center gap-2">
        {pending ? (
          <>
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </div>
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(sendContactMessageAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Message Sent Successfully!",
        description: state.message || "Thank you for your message. I'll get back to you soon!",
        className: "bg-accent text-accent-foreground",
      });
      formRef.current?.reset();
    } else if (state.message && !state.success) {
      toast({
        title: "Oops! Something went wrong",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/wasi-ahmed-khan-a75420230/",
      label: "LinkedIn",
      color: "hover:bg-primary hover:text-primary-foreground"
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      href: "mailto:wasi28khan@gmail.com",
      text: "wasi28khan@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+918600536726",
      text: "+91 86005 36726",
      label: "Phone"
    },
    {
      icon: MapPin,
      href: "#",
      text: "Pune, Maharashtra, India",
      label: "Location"
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">GET IN TOUCH</span>
          </div>
          
          <h2 className="font-bold text-4xl tracking-tight sm:text-5xl text-foreground">
            Let's Discuss <span className="text-primary">Financial Opportunities</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Interested in discussing financial analysis, risk management, or potential collaborations? 
            I'm open to opportunities in finance, analytics, and business strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card p-8 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Professional Connect</h3>
                  <p className="text-muted-foreground mt-1">Let's discuss finance, analytics, and strategic opportunities</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-lg card hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="p-2 rounded bg-primary/10 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.text}</p>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
                  <User className="w-5 h-5 text-primary" />
                  Professional Network
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg card text-foreground hover:scale-105 transition-all duration-300 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Info */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Available For</h4>
                  <p className="text-sm text-muted-foreground">
                    Financial Analyst • Risk Management • Corporate Finance • Data Analytics • Strategic Planning Roles
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                <p className="text-muted-foreground mt-1">Fill out the form and I'll respond promptly</p>
              </div>
            </div>

            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input 
                    name="name" 
                    placeholder="Full Name" 
                    className="input"
                  />
                  {state.errors?.name && (
                    <p className="text-accent text-sm flex items-center gap-1">
                      • {state.errors.name[0]}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Input 
                    name="email" 
                    placeholder="Email Address" 
                    type="email" 
                    className="input"
                  />
                  {state.errors?.email && (
                    <p className="text-accent text-sm flex items-center gap-1">
                      • {state.errors.email[0]}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Input 
                  name="subject" 
                  placeholder="Subject / Opportunity Type" 
                  className="input"
                />
                {state.errors?.subject && (
                  <p className="text-accent text-sm flex items-center gap-1">
                    • {state.errors.subject[0]}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Textarea 
                  name="message" 
                  placeholder="Tell me about the opportunity, financial project, or how we can collaborate..." 
                  className="input min-h-32 resize-none"
                  rows={5}
                />
                {state.errors?.message && (
                  <p className="text-accent text-sm flex items-center gap-1">
                    • {state.errors.message[0]}
                  </p>
                )}
              </div>
              
              <SubmitButton />
            </form>

            {/* Form Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Your information is secure and will only be used for professional communication
              </p>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-muted border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-muted-foreground text-sm font-medium">
              Open to full-time positions, internships, and strategic financial projects
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}