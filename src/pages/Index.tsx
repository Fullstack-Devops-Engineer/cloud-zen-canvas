import { Mail, MapPin, Phone, Linkedin, Award, Briefcase, GraduationCap, User, Code2, Cloud, Database, Server, Shield, GitBranch, Container, Monitor, Youtube, Download } from "lucide-react";
import awsLogo from "@/assets/aws-logo.png";
import azureLogo from "@/assets/azure-logo.png";
import prometheusLogo from "@/assets/prometheus-logo.png";
import grafanaLogo from "@/assets/grafana-logo.png";
import dockerLogo from "@/assets/docker-logo.png";
import kubernetesLogo from "@/assets/kubernetes-logo.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = {
    cloud: ["AWS", "Azure", "OpenStack"],
    containers: ["Docker", "Kubernetes", "AWS EKS"],
    iac: ["Terraform", "Ansible"],
    monitoring: ["Datadog", "Zabbix", "Prometheus", "Grafana", "CloudWatch"],
    programming: ["Bash", "Python", "YAML", "HCL"],
    security: ["Barracuda", "WAF", "PF Sense", "Sophos", "IAM", "MFA"],
  };

  const experience = [
    {
      company: "Uncia Technologies Pvt. Ltd",
      role: "Senior Cloud Infrastructure Engineer",
      period: "Nov 2024 – Present",
      highlights: [
        "Created AWS landing zones for production environments",
        "Automated VM operations using Azure Automation & AWS Lambda",
        "Managed security with Sophos and Fortigate firewalls",
        "Coordinated DR drill activities"
      ]
    },
    {
      company: "Nminds",
      role: "Cloud Consultant",
      period: "Feb 2023 – Nov 2024",
      highlights: [
        "Delivered AWS cloud training on EC2, VPC, and networking",
        "Created educational content for YouTube on cloud technologies",
        "Designed cloud-based solutions for clients"
      ]
    },
    {
      company: "US Technology (UST Global)",
      role: "Cloud Ops Engineer",
      period: "Sep 2021 – Feb 2023",
      highlights: [
        "Deployed Docker containers on NESC OpenStack and Azure VMs",
        "Developed Zabbix dashboards for critical resource monitoring",
        "Managed Azure IAM, MFA, and disk encryption (PMK to CMK)",
        "VMware ESXi upgrade activities"
      ]
    },
    {
      company: "Inspace Technologies",
      role: "System Administrator",
      period: "Jul 2018 – Mar 2021",
      highlights: [
        "Implemented CI/CD pipelines using AWS DevOps tools",
        "Migrated on-premise VMs to AWS cloud",
        "Deployed web applications in Docker containers"
      ]
    },
    {
      company: "JoulestoWatts Business Solutions Pvt Ltd",
      role: "Information Technology Supervisor",
      period: "Dec 2017 – Jun 2018",
      highlights: [
        "Managed networking infrastructure and server configurations",
        "Handled server administration and maintenance",
        "Configured network systems for optimal performance"
      ]
    },
    {
      company: "Integrated Wireless Solutions",
      role: "RF Engineer",
      period: "Jul 2015 – Jun 2016",
      highlights: [
        "Managed RF network infrastructure",
        "Performed site surveys and network optimization",
        "Configured and maintained telecommunications equipment"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-white animate-fade-in">
            <div className="inline-block mb-4">
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold">
                AWS Certified Solutions Architect
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-400">
              VINOTHRAJ R
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-white/90 font-medium">
              CloudOps Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+91-8760367574</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>vinothrajtechie@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button 
                variant="secondary" 
                size="lg" 
                className="shadow-elevated hover:scale-110 transition-all duration-300 animate-slow-blink"
                onClick={() => window.open('https://linkedin.com/in/vinothrajr', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="shadow-elevated bg-red-600 hover:bg-red-700 hover:scale-110 text-white border-red-600 transition-all duration-300 animate-slow-blink"
                style={{ animationDelay: '0.3s' }}
                onClick={() => window.open('https://www.youtube.com/@cloudyops/videos', '_blank')}
              >
                <Youtube className="w-5 h-5 mr-2" />
                YouTube
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="shadow-elevated bg-pink-500 hover:bg-pink-600 text-white border-pink-500 animate-slow-blink"
                style={{ animationDelay: '0.6s' }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Vinothraj_CloudOps_Engineer_Resume.pdf';
                  link.download = 'Vinothraj_CloudOps_Engineer_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="glass-effect shadow-card p-8 animate-fade-in border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Professional Summary</h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AWS Certified Solutions Architect – Associate with <span className="font-semibold text-primary">6+ years of experience</span> in designing, 
              managing, and optimizing AWS, Azure, and OpenStack cloud environments. Proficient in 
              cloud infrastructure management, automation, performance monitoring, and cost 
              optimization. Seeking to leverage cloud architecture expertise and automation skills in a 
              dynamic cloud engineering role to enhance operational efficiency and scalability.
            </p>
          </Card>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-3 text-foreground">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-effect shadow-card p-6 hover:shadow-elevated transition-smooth animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Cloud Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="glass-effect shadow-card p-6 hover:shadow-elevated transition-smooth animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Container className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Containers & Orchestration</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.containers.map((skill) => (
                  <Badge key={skill} className="bg-accent text-accent-foreground px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="glass-effect shadow-card p-6 hover:shadow-elevated transition-smooth animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-8 h-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">Infrastructure as Code</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.iac.map((skill) => (
                  <Badge key={skill} className="bg-secondary text-secondary-foreground px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="glass-effect shadow-card p-6 hover:shadow-elevated transition-smooth animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-8 h-8 text-success" />
                <h3 className="text-xl font-bold text-foreground">Monitoring Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.monitoring.map((skill) => (
                  <Badge key={skill} className="bg-success text-success-foreground px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="glass-effect shadow-card p-6 hover:shadow-elevated transition-smooth animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-destructive" />
                <h3 className="text-xl font-bold text-foreground">Security Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.security.map((skill) => (
                  <Badge key={skill} variant="destructive" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="glass-effect shadow-card p-6 hover:shadow-elevated transition-smooth animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Programming & Scripting</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-primary text-primary px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Briefcase className="w-10 h-10 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">Professional Experience</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card 
                key={index} 
                className="glass-effect shadow-card p-8 hover:shadow-elevated transition-smooth animate-slide-in-left border-l-4 border-l-primary"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground mt-2 md:mt-0 px-4 py-2">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-effect shadow-card p-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Education</h2>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  B.E. in Electronics and Communication Engineering
                </h3>
                <p className="text-lg text-muted-foreground">S.K.P Institute of Technology</p>
                <Badge className="bg-secondary text-secondary-foreground mt-3 px-4 py-2">
                  2014
                </Badge>
              </div>
            </Card>

            <Card className="glass-effect shadow-card p-8 animate-fade-in border-2 border-success/30">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-10 h-10 text-success" />
                <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      AWS Certified Solutions Architect – Associate
                    </h3>
                    <Badge className="bg-success text-success-foreground mt-2 px-4 py-2">
                      July 2024
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 Vinothraj R. CloudOps Engineer | AWS Certified Solutions Architect
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Building scalable cloud infrastructure with passion and precision
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
