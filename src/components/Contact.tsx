import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-card/50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 font-headline">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8 text-lg">
          I&apos;m currently open to new opportunities and collaborations. If you have a project in mind, a question, or just want to connect, my inbox is always open.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="mailto:zakkycrypt@gmail.com.com">
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>
        </Button>
      </div>
    </section>
  );
}
