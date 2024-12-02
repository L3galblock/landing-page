import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rasit Tavus",
    title: "CEO & Founder",
    description: "Dr., Criminal and Blockchain law.",
    image: "/assets/images/team/rasit-tavus.png"
  },
  {
    name: "Arda Atacan Ersoy",
    title: "Founding Engineer",
    description: "Expert in web development and blockchain architecture. Bsc at Bilkent University, Msc at Technical University of Munich.",
    image: "/assets/images/team/arda-ersoy.png"
  },
  {
    name: "Serhat Bezmez",
    title: "Founding Engineer",
    description: "Speicalized in backend development and blockchain data analysis. Bsc at Bilkent University, Msc at Technical University of Munich.",
    image: "/assets/images/team/serhat-bezmez.png"
  },
  {
    name: "Ferhat Karaca",
    title: "Founding Engineer",
    description: "Expert in frontend development and blockchain solutions. Bsc at Bilkent University, Msc at Technical University of Munich.",
    image: "/assets/images/team/ferhat-karaca.png"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team-section" className="w-full py-20 px-4 relative">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Passionate experts building the future of legal blockchain solutions
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-[#2D1A47] to-[#1B0F2E] p-1"
          >
            <div className="relative overflow-hidden rounded-xl bg-[#1B0F2E] p-6 h-full transform transition-transform duration-300 group-hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-gray-400 text-sm">
                  {member.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
