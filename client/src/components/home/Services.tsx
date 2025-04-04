import { Link } from "wouter";
import { 
  Bug, 
  UserCheck, 
  Shield, 
  Code, 
  Network,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <Bug className="text-xl" />,
    title: "Web Development",
    description: "Comprehensive scanning and analysis to identify security vulnerabilities in your systems and applications."
  },
  {
    icon: <UserCheck className="text-xl" />,
    title: "App Development",
    description: "Simulated cyberattacks to evaluate the security of your systems and identify exploitable vulnerabilities.",
    highlight: true
  },
  {
    icon: <Shield className="text-xl" />,
    title: "Web Design",
    description: "In-depth examination of security policies, controls, and implementation to ensure best practices."
  },
  {
    icon: <Code className="text-xl" />,
    title: "Responsive Design",
    description: "Thorough analysis of application source code to identify security flaws and implementation errors."
  },
  {
    icon: <Network className="text-xl" />,
    title: "Advertising",
    description: "Comprehensive assessment of network infrastructure to identify and address potential security threats."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">OUR SERVICES</h2>
          <p className="text-light-text max-w-2xl mx-auto">Professional ethical hacking services to protect your digital assets and infrastructure.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card ${
                service.highlight 
                  ? "bg-accent rounded-lg p-6 transition-all duration-300 hover:border-secondary border border-transparent" 
                  : "bg-card rounded-lg p-6 transition-all duration-300 hover:border-secondary border border-transparent"
              }`}
            >
              <div className={`flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4 ${service.highlight ? "text-white" : "text-secondary"}`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-bold ${service.highlight ? "text-white" : "text-secondary"} mb-2`}>
                {service.title}
              </h3>
              <p className={service.highlight ? "text-white" : "text-light-text"}>
                {service.description}
              </p>
            </div>
          ))}
          
          <div className="service-card bg-accent rounded-lg p-6 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-white mb-4">
              <ArrowRight className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">See More</h3>
            <p className="text-white">Explore our complete range of ethical hacking and cybersecurity services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
