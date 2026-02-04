import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
const experiences = [
  {
    title: "Supervisor IT Application Developer Analyst",
    company: "PT Mitra Pinasthika Mulia (MPM Honda Jatim)",
    location: "Surabaya, Indonesia",
    period: "2024 - Present",
    description: [
      "Mengembangkan dan memelihara aplikasi internal berbasis .NET dan SQL Server untuk proses klaim, approval, dan reporting",
      "Mengoptimasi stored procedure kompleks sehingga waktu eksekusi laporan berkurang hingga 60%",
      "Membangun sistem approval terintegrasi antar aplikasi untuk mengurangi error status data",
      "Mengembangkan API dan fitur automation untuk mempercepat proses bisnis internal",

      "Tools & Technologies: C#, ASP.NET MVC, SQL Server, LINQ, REST API, JavaScript, Git",

      "Key Achievements:",
      "• Optimasi query SQL kompleks dari >1 menit menjadi ±10 detik",
      "• Mengurangi kesalahan data approval hingga lebih dari 70%",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "PT Astra Honda Motor",
    location: "Jakarta, Indonesia",
    period: "Dec 2023 - Jun 2024",
    description: [
      "Merancang dan mengimplementasikan basis data aplikasi enterprise",
      "Membuat dokumentasi analisis sistem untuk aplikasi produksi dan operasional",
      "Mengembangkan sistem informasi berbasis web sesuai standar perusahaan",
      "Berkolaborasi dengan tim developer dan QA dalam proses testing dan deployment",

      "Tools & Technologies: Java Spring Boot, SQL Server, REST API, Git, Visual Paradigm",

      "Key Achievements:",
      "• Meningkatkan efisiensi pengolahan data aplikasi hingga 40%",
      "• Berkontribusi pada pengembangan modul sistem produksi skala besar",
    ],
  },
  {
    title: "Staff Marketing",
    company: "Synapsetech.id",
    location: "Indonesia",
    period: "Aug 2023 - Oct 2023",
    description: [
      "Melakukan riset pasar dan analisis calon pelanggan setiap minggu",
      "Menyusun strategi promosi digital untuk meningkatkan engagement klien",
      "Berhasil menjangkau hingga 40 klien potensial per minggu",

      "Tools & Technologies: Google Sheets, Digital Marketing Tools, CRM",

      "Key Achievements:",
      "• Meningkatkan leads mingguan hingga 2x lipat dalam 1 bulan",
    ],
  },
  {
    title: "IT Operator & Network Support",
    company: "Faisal Net",
    location: "Madiun, Indonesia",
    period: "2015 - 2018",
    description: [
      "Mengelola dan melakukan troubleshooting lebih dari 7 komputer dan jaringan lokal",
      "Menyusun laporan keuangan harian dan mingguan",
      "Menjaga stabilitas jaringan operasional warnet",

      "Tools & Technologies: Windows Server, Networking, Troubleshooting Hardware",

      "Key Achievements:",
      "• Mengurangi downtime jaringan hingga 50%",
    ],
  },
];


  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // Work Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My career path through various roles and companies, building expertise in modern web development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
