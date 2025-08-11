import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="flex min-h-screen items-center">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-semibold rounded-full text-sm mb-4">
                🏗️ Professional Construction Services
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Your 
              <span className="text-accent block">Dreams</span>
              Into Reality
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              From residential homes to commercial projects, we deliver exceptional construction services with unmatched quality and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-white/80 text-sm">Years Experience</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-white/80 text-sm">Happy Clients</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Wrench className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-white/80 text-sm">Projects Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;