'use client';

import { Button } from "@/components/ui/button";
import { Calendar, Music4, Users, MapPin, ArrowRight, Mic, Guitar, Drum, Piano, Clock, Ticket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import YouTubePlayer from "@/components/YouTubePlayer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const teamMembers = [
  {
    name: "Pak Amba",
    role: "Vokalis Utama",
    image: "https://images.unsplash.com/photo-1522196772883-393d879eb14d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: <Mic className="h-6 w-6" />,
    description: "Vokalis dengan pengalaman 15 tahun di industri musik"
  },
  {
    name: "Susi",
    role: "Lead Vocal",
    image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: <Mic className="h-6 w-6" />,
    description: "Penyanyi profesional dengan suara yang memukau"
  },
  {
    name: "Rusdi",
    role: "Gitaris",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: <Guitar className="h-6 w-6" />,
    description: "Gitaris handal dengan teknik fingerstyle yang unik"
  },
  {
    name: "Budi",
    role: "Drummer",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: <Drum className="h-6 w-6" />,
    description: "Drummer energetik dengan feel rhythm yang kuat"
  },
  {
    name: "Linda",
    role: "Pianist",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    icon: <Piano className="h-6 w-6" />,
    description: "Pianis klasik dengan sentuhan jazz kontemporer"
  }
];

const events = [
  {
    id: 1,
    title: "Ngawi Music Festival",
    date: "25 Juni 2024",
    time: "19:00 WIB",
    location: "Alun-alun Ngawi",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Festival musik terbesar di Ngawi yang menampilkan berbagai genre musik dari artis lokal dan nasional. Nikmati pengalaman musik yang tak terlupakan di tengah keindahan kota Ngawi.",
    lineup: ["Pak Amba & Band", "Susi Akustik", "Rusdi Guitar Project"],
    ticketPrice: "Rp 50.000",
    facilities: ["Area Parkir Luas", "Food Court", "Merchandise Booth"]
  },
  {
    id: 2,
    title: "Jazz Night Ngawi",
    date: "15 Juli 2024",
    time: "20:00 WIB",
    location: "Taman Wisata Ngawi",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Malam jazz eksklusif dengan penampilan spesial dari musisi jazz terbaik Ngawi. Rasakan alunan musik jazz yang menenangkan di bawah langit malam.",
    lineup: ["Linda Jazz Trio", "Ngawi Jazz Ensemble"],
    ticketPrice: "Rp 75.000",
    facilities: ["Tempat Duduk VIP", "Welcome Drink", "Meet & Greet"]
  },
  {
    id: 3,
    title: "Rock in Ngawi",
    date: "30 Juli 2024",
    time: "19:30 WIB",
    location: "Stadion Ngawi",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Festival rock terbesar di Ngawi yang akan menggetarkan kota dengan musik rock terbaik. Bersiaplah untuk pengalaman konser yang energetik dan menggemparkan.",
    lineup: ["Rusdi Rock Band", "Ngawi Metal Project"],
    ticketPrice: "Rp 60.000",
    facilities: ["Standing Area", "Merchandise Exclusive", "After Party"]
  }
];

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="min-h-screen bg-zinc-50">
      <YouTubePlayer />
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="relative h-screen flex items-center justify-center bg-zinc-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20 }}
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Musical background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Ngawi Musical
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-300 mb-8"
          >
            Menyatukan Harmoni Budaya Ngawi Melalui Musik
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transform hover:scale-105 transition-transform"
            >
              Jelajahi Sekarang <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-900">Apa yang Kami Tawarkan</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Music4 className="h-8 w-8 text-zinc-900" />,
                title: "Pertunjukan Musik",
                description: "Nikmati pertunjukan musik berkualitas dari berbagai genre dan seniman lokal"
              },
              {
                icon: <Users className="h-8 w-8 text-zinc-900" />,
                title: "Workshop Musik",
                description: "Bergabung dalam workshop interaktif untuk mengembangkan bakat musikal Anda"
              },
              {
                icon: <Calendar className="h-8 w-8 text-zinc-900" />,
                title: "Event Reguler",
                description: "Ikuti jadwal event musik regular kami yang diselenggarakan setiap bulan"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-zinc-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-zinc-900">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="py-24 bg-zinc-100"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-900">Tim Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-white p-4">
                      <p className="text-lg font-semibold">{member.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mr-4">
                      {member.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900">{member.name}</h3>
                      <p className="text-zinc-600">{member.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-900">Event Mendatang</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-zinc-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900">{event.title}</h3>
                  <div className="flex items-center text-zinc-500 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full hover:bg-zinc-100">
                        Lihat Detail
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-4 md:p-6">
                      <DialogHeader>
                        <DialogTitle className="text-xl md:text-2xl font-bold">{event.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 md:mt-6">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg mb-4 md:mb-6"
                        />
                        <div className="space-y-3 md:space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex items-center text-zinc-600">
                              <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 flex-shrink-0" />
                              <span className="text-sm md:text-base">{event.date}</span>
                            </div>
                            <div className="flex items-center text-zinc-600">
                              <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 flex-shrink-0" />
                              <span className="text-sm md:text-base">{event.time}</span>
                            </div>
                            <div className="flex items-center text-zinc-600">
                              <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 flex-shrink-0" />
                              <span className="text-sm md:text-base">{event.location}</span>
                            </div>
                            <div className="flex items-center text-zinc-600">
                              <Ticket className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 flex-shrink-0" />
                              <span className="text-sm md:text-base">{event.ticketPrice}</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2 text-base md:text-lg">Deskripsi</h4>
                            <p className="text-zinc-600 text-sm md:text-base">{event.description}</p>
                          </div>
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2 text-base md:text-lg">Line Up</h4>
                            <ul className="list-disc list-inside text-zinc-600 text-sm md:text-base">
                              {event.lineup.map((artist, index) => (
                                <li key={index}>{artist}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2 text-base md:text-lg">Fasilitas</h4>
                            <ul className="list-disc list-inside text-zinc-600 text-sm md:text-base">
                              {event.facilities.map((facility, index) => (
                                <li key={index}>{facility}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-6 md:mt-8 sticky bottom-0 bg-white pt-4 border-t">
                          <Button className="w-full md:text-lg py-2 md:py-3">Beli Tiket Sekarang</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabung dengan Komunitas Musik Ngawi</h2>
            <p className="text-zinc-300 mb-8 text-lg">Jadilah bagian dari perjalanan musik kami dan temukan pengalaman tak terlupakan</p>
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-100 transform hover:scale-105 transition-transform"
            >
              Daftar Sekarang
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Ngawi Musical</h3>
              <p className="text-sm">Menyatukan harmoni budaya Ngawi melalui musik dan pertunjukan berkualitas.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Tentang Kami</li>
                <li className="hover:text-white transition-colors cursor-pointer">Event</li>
                <li className="hover:text-white transition-colors cursor-pointer">Workshop</li>
                <li className="hover:text-white transition-colors cursor-pointer">Kontak</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@ngawimusical.com</li>
                <li>Phone: (0351) 123456</li>
                <li>Alamat: Jl. Teuku Umar No. 1, Ngawi</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Sosial Media</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-white transition-colors cursor-pointer">Facebook</li>
                <li className="hover:text-white transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-white transition-colors cursor-pointer">YouTube</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2024 Ngawi Musical. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}