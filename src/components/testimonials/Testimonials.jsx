import React from 'react'
import './testimonials.css'
import chess from '../../assets/chess.jpg'
import cat from '../../assets/cat.jpg'
import books from '../../assets/books.jpg'
import food from '../../assets/food.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
  avatar:cat,
  name: 'I love animals, but my cats are my biggest love. ',
  review: 'Cats '
  }, 

  {
    avatar:chess,
    name: 'Whenever I have the opportunity, I love playing chess. I find it a very challenging game, and even though the game can be simple, it is not.  ',
    review: 'Chess '
    }, 


  {
    avatar:books,
    name: 'Mihail Bulgakov, Feodor Dostoievski, Mircea Eliade, Camil Petrescu',
    review: 'Books '
    }, 

    {
      avatar:food,
      name: 'I love cooking and eating delicious food',
      review: 'Food '
      }, 

]




const Testimonials = () => {

  
  return (
    <section id ='testimonials'>
          <h5>Passions &</h5>
          <h2>Hobbies</h2>


          <Swiper className="container testimonials_container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
         >
          {
            data.map(({avatar, name, review}, index) => {
                return(
                  
                  <SwiperSlide key={index} className="testimonials">
                  
                  <div className="client_avatar">
                      <img src={avatar} />
                      
                  </div>

                  <h4 className='hobby__name'>{name}</h4>
                      <h2 className='hobby__review'>
                      {review}
                      </h2>

                </SwiperSlide>
                )




            })
          }
          


          </Swiper>

    </section>
  )
}

export default Testimonials