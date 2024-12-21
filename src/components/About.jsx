import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-10">
      <motion.div
        variants={textVariant()}
        className="max-w-3xl flex-shrink-0 text-center lg:text-left"
      >
        <h2 className={styles.sectionHeadText}>Kim bu Enes?</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] leading-[30px]"
        >
          Merhaba, ben Enes Bayar. 2024 yılında Selçuk Üniversitesi Bilgisayar
          Mühendisliği bölümünden mezun oldum. Kariyerime mobil uygulama
          geliştirme alanında başladım ve bu süreçte çeşitli projelerde aktif
          olarak yer aldım.
          <br />
          <br />
          Sonrasında oyun sektöründe çalışmalara başladım ve bu alanda kapsamlı
          deneyimler edindim. İki farklı şirkette staj yaparak oyun geliştirme
          süreçlerinin tüm aşamalarında ve reklam entegrasyonlarında görev
          aldım. Ancak zamanla web teknolojilerine olan ilgim arttı ve
          kariyerimi Front-End geliştirme üzerine şekillendirmeye karar verdim.
          <br />
          <br />
          Web teknolojilerine olan ilgimle birlikte e-ticaret siteleri gibi
          dinamik ve kullanıcı dostu web projeleri geliştirmeye başladım.
          React, Next.js ve Tailwind CSS gibi modern teknolojileri kullanarak
          görsel açıdan etkileyici ve işlevsel uygulamalar oluşturdum. Bu yolda
          kendimi sürekli geliştirmeye devam ediyor ve yenilikçi çözümler
          sunmaya odaklanıyorum.
        </motion.p>
      </motion.div>

      <div className="mt-10 lg:mt-36 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");