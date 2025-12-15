export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

export const journalEntries: JournalEntry[] = [
  {
    id: "WorldTech",
    title: "Worldtech Information Solutions, Inc. Visit",
    date: "11/19/2025",
    location: "Cebu, Philippines",
    image: "/gallery/worldtech_logo.png",
    excerpt: `Worldtech Information Solutions, Inc. is a Philippine-based IT 
    consultancy and training company with international presence, 
    specializing in cybersecurity, IT consulting, and certified training 
    programs for clients including banks, government agencies, and schools.`,
    content: `Worldtech Information Solutions, Inc. 
    is a Philippine-based IT consultancy and training 
    company with offices in Cebu, Manila, and international 
    presence in Australia and Singapore. The company specializes in 
    IT consulting, cybersecurity solutions, and professional training, 
    including authorized certification programs in Microsoft, Cisco, and 
    VMware technologies. It serves a diverse client base, including banks, 
    government agencies, schools, and large enterprises, offering both strategic 
    IT guidance and skills development. With a team of experienced consultants 
    and certified trainers, Worldtech emphasizes cybersecurity, operational technology 
    protection, and capacity building for organizations seeking to enhance their 
    IT infrastructure and workforce competencies.


    OBSERVATION: The company strongly focuses on cybersecurity, and it’s clear 
    that they are highly skilled through their certifications, services, 
    and training programs. I was honestly surprised by how risky today’s technology, 
    data, and IT industry can be. This company plays an important role in the modern tech 
    world by offering job opportunities, real-world experience, professional growth, 
    achievements, and insights into hacking.

    LEARNINGS: I learned that cybersecurity is essential in today’s digital 
    world and that technology and data come with serious risks. The experience 
    made me more aware of cyber threats and the many career opportunities in 
    cybersecurity and the IT industry.

    `,
    tags: ["Day 1", "Ethical Hacking", "Cybersecurity"],
  },
  {
    id: "CodeChum",
    title: "CodeChum",
    date: "11/20/2025",
    location: "Cebu, Philippines",
    image: "/gallery/codechum_logo.png",
    excerpt: `CodeChum is a Cebu-based educational platform that enhances 
    programming education in the Philippines by offering tools for 
    automatic code checking, performance monitoring, and AI-assisted 
    self-study, supporting various programming languages and serving over 
    100 schools.`,
    content: `Rivan IT Cebu is a training center. Established under the 
    network of Rivan School off Technology Inc. (founded 1999) it 
    specializes in IT and networking certification courses such as 
    Cisco CCNA/CCNP, Linux, security, and VoIP. For someone in Electronics 
    Engineering, it can be a useful complement if you are looking to build 
    skills in networking infrastructure, or IT-hardware integration, but it may 
    not provide the full breadth of electronics engineering topics 
    (like analog/digital circuit design, embedded systems, power electronics), 
    in student forums, its networking courses are noted as "good for getting your foot 
    in the door" for IT roles. In short: good for IT/network side of electronics, 
    less ideal if your goal is full electronics design engineering. If you like, 
    I can check whether they have any dedicated electronics hardware/embedded systems course track.

    OBSERVATION: Sir Xavier showed strong skills and shared helpful insights 
    on how technology is making programming education easier and more 
    accessible in the Philippines. He also reminded us of the importance 
    of maximizing the use of AI to improve our learning and skills.

    LEARNINGS: I learned that technology plays an important 
    role in making programming education more accessible in the Philippines. 
    I also realized that using AI effectively can help students learn better, 
    improve skills, and stay competitive in the tech industry.
    `,
    tags: ["Day 2", "Education", "Interactive", "Hands-on" ],
  },
  {
    id: "Rivan",
    title: "Rivan IT Cebu",
    date: "11/20/2025",
    location: "Cebu, Philippines",
    image: "/gallery/rivan_logo.png",
    excerpt:
      `Rivan IT Cebu is a training center specializing in IT and networking 
      certifications that is useful for building networking and IT-related skills 
      in electronics engineering, but less ideal for comprehensive electronics design education.`,
    content: `Rivan IT Cebu is a training center. Established under the 
    network of Rivan School off Technology Inc. (founded 1999) it 
    specializes in IT and networking certification courses such as 
    Cisco CCNA/CCNP, Linux, security, and VoIP. For someone in Electronics 
    Engineering, it can be a useful complement if you are looking to build 
    skills in networking infrastructure, or IT-hardware integration, but it may 
    not provide the full breadth of electronics engineering topics 
    (like analog/digital circuit design, embedded systems, power electronics), 
    in student forums, its networking courses are noted as "good for getting your foot 
    in the door" for IT roles. In short: good for IT/network side of electronics, 
    less ideal if your goal is full electronics design engineering. If you like, 
    I can check whether they have any dedicated electronics hardware/embedded systems course track.

    OBSERVATION: RIVAN IT Cebu gave me a clear understanding of the company’s strong 
    focus on IT and networking certifications. Their curriculum is clearly 
    aligned with industry-standard skills, particularly in Cisco, Linux, and security.

    LEARNINGS: I learned that IT and networking certifications, 
    especially in Cisco, Linux, and security, are essential for building industry-ready skills.
    `,
    tags: ["Day 2", "Cybersecurity"],
  },
  {
    id: "mata",
    title: "MATA Technologies, Inc",
    date: "11/21/2025",
    location: "Cebu, Philippines",
    image: "/gallery/mata_logo.png",
    excerpt:
      "Mata Technologies Inc. is a Philippine company that creates immersive 360° virtual tours and VR mapping solutions for real estate and tourist destinations.",
    content: `Mata Technologies Inc. is a proudly homegrown Philippine company 
    specializing in virtual tours for real estate and virtual reality mapping for 
    tourist destinations across the country. Inspired by the Filipino word “mata,” 
    meaning “eyes,” Mata Tech provides immersive 360° previews that allow users to 
    explore properties and notable locations as if they were truly there.

    OBSERVATION: My observation is that MATA Technologies, Inc. 
    focuses strongly on UI/UX design. Their creativity is impressive, 
    and it is clear how talented their team is. I also noticed that 
    they communicated with us in a very friendly and approachable manner.

    LEARNINGS: I learned the importance of creativity and talent in UI/UX design. 
    I also realized that being approachable and friendly while sharing 
    knowledge makes learning and collaboration much more effective.
    `,
    tags: ["Day 3", "Environment", "Interactive", "Innovation"],
  },
  {
    id: "tarsier",
    title: "T.A.R.S.I.E.R. 117",
    date: "11/22/2025",
    location: "Bohol, Philippines",
    image: "/gallery/tarsier_logo.png",
    excerpt:
      "Witnessing how ideas transform into products, and how technology shapes industries, opened new perspectives on career possibilities.",
    content: `TARSIER 117 Which stands for Tourist Assistance and 
    Rescue Section, immediate Emergency Responders, is an emergency 
    response and disaster management unit established by the 
    Provincial Government of Bohol. It was created to ensure 
    the safety and security of both locals and tourists by 
    providing immediate assistance during emergencaes, such 
    as accidents natural disasters, and medical snuations. 
    Operating 24/7 through the emergency hotline 117. TARSLER. 
    117 is composed of trashed responders equipped for rescue, first aid, and disaster operations.
    
    \n\nOBSERVATION: During the visit to T.A.R.S.I.E.R 117, 
    I was impressed by how advanced and upgraded their operations are. 
    They are highly committed to keeping their kababayan safe, demonstrating 
    professionalism and a strong willingness to learn. I also found them to be 
    very friendly and approachable.

    \nLEARNINGS: I learned the importance of 
    professionalism, continuous learning, and 
    dedication in ensuring the safety of others, 
    while maintaining a friendly and approachable attitude.
    `,
    tags: ["Day 4", "Rescue", "Respond"],
  },
];


export interface HandwrittenEntry {
  id: string;
  image: string;
  alt: string;
}

export const handwrittenEntries: HandwrittenEntry[] = [
  {
    id: "hw-1",
    image: "/gallery/journal/1.jpg", 
    alt: "Page 1",
  },
  {
    id: "hw-2",
    image: "/gallery/journal/2.jpg",
    alt: "Page 2",
  },
  {
    id: "hw-3",
    image: "/gallery/journal/3.jpg",
    alt: "Page 3",
  },
  {
    id: "hw-4",
    image: "/gallery/journal/4.jpg",
    alt: "Page 4",
  },
  {
    id: "hw-5",
    image: "/gallery/journal/5.jpg",
    alt: "Page 5",
  },
  {
    id: "hw-6",
    image: "/gallery/journal/6.jpg",
    alt: "Page 6",
  },
  {
    id: "hw-7",
    image: "/gallery/journal/7.jpg",
    alt: "Page 7",
  },
  {
    id: "hw-8",
    image: "/gallery/journal/8.jpg",
    alt: "Page 8",
  },
  {
    id: "hw-9",
    image: "/gallery/journal/9.jpg",
    alt: "Page 9",
  },

];