"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Twitter, Instagram, Phone, MapPin, Send, User, MessageCircle } from 'lucide-react';
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
      className="w-full font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300 group relative overflow-hidden"
      disabled={pending}
      size="lg"
    >
      <div className="flex items-center gap-2 relative z-10">
        {pending ? (
          <>
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            Send Message
          </>
        )}
      </div>
      
      {/* Button Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
        title: "🎉 Message Sent Successfully!",
        description: state.message || "Thank you for your message. I'll get back to you soon!",
        className: "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0",
      });
      formRef.current?.reset();
    } else if (state.message && !state.success) {
      toast({
        title: "⚠️ Oops! Something went wrong",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/faskey37",
      label: "GitHub",
      color: "hover:bg-gray-900 hover:text-white"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tauqeer-khan-64249a32b/",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:bg-sky-500 hover:text-white"
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:bg-pink-600 hover:text-white"
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      href: "mailto:tauqeer.khan.webdev@gmail.com",
      text: "tauqeer.khan.webdev@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+918484970238",
      text: "+91 8484970238",
      label: "Phone"
    },
    {
      icon: MapPin,
      href: "#",
      text: "Nagpur, Maharashtra",
      label: "Location"
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-br from-background via-background to-muted/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm always open to new challenges and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-headline">Let's Start a Conversation</h3>
                  <p className="text-muted-foreground mt-1">I'm excited to hear about your project ideas!</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:bg-background/80 hover:border-primary/30 hover:shadow-md transition-all duration-300 group-hover:scale-105"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
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
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Follow My Journey
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-background/50 border border-border/30 text-foreground/70 hover:scale-110 transition-all duration-300 ${social.color} group relative overflow-hidden`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                      {/* Social Icon Glow */}
                      <div className="absolute inset-0 rounded-xl bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response Time</h4>
                  <p className="text-sm text-muted-foreground">I typically reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white shadow-lg">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline">Send Me a Message</h3>
                <p className="text-muted-foreground mt-1">Fill out the form and I'll get back to you soon</p>
              </div>
            </div>

            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input 
                    name="name" 
                    placeholder="Full Name" 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors h-12"
                  />
                  {state.errors?.name && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      • {state.errors.name[0]}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Input 
                    name="email" 
                    placeholder="Email Address" 
                    type="email" 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors h-12"
                  />
                  {state.errors?.email && (
                    <p className="text-red-500 text-sm flex items-center gap-1">
                      • {state.errors.email[0]}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Input 
                  name="subject" 
                  placeholder="Subject" 
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors h-12"
                />
                {state.errors?.subject && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    • {state.errors.subject[0]}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Textarea 
                  name="message" 
                  placeholder="Tell me about your project, ideas, or how we can collaborate..." 
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors min-h-32 resize-none"
                  rows={5}
                />
                {state.errors?.message && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    • {state.errors.message[0]}
                  </p>
                )}
              </div>
              
              <SubmitButton />
            </form>

            {/* Form Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Your information is secure and will never be shared with third parties
              </p>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border/40">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            <span className="text-muted-foreground text-sm font-medium">
              Open to freelance opportunities and full-time positions
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}