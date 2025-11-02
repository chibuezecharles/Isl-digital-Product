import React from 'react'
import HeroPage from './HeroPage'
import Footer from './Footer'
import HowItWorks from './HowItWorks'
import Testimonial from './Testimonial'
import WhyChooseUs from './WhyChooseUs'
import WaitingList from './WaitingList'

const Home = () => {
  return (
    <div>
      <section id="home">
        <HeroPage />
      </section>

      <section id="process">
        <HowItWorks />
      </section>

      <section id="advantage">
        <WhyChooseUs />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>
      <WaitingList />
      <Footer />
    </div>
  )
}

export default Home
