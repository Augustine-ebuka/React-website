import React from 'react'
import Cards from './Cards'
import './Cards.css'


export default function Card() {
  return (
      <div className='cards'>
          <h1>Checkout out these epic Destination</h1>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <Cards
                          src={require('../images/img-1.jpg')}
                            text='Explore the hidden waterfall deep inside the amazon jungle'
                            label='Adventure'
                            path='/services'
                      />
                      <Cards
                          src={require('../images/img-2.jpg')}
                            text='Explore the hidden waterfall deep inside the amazon jungle'
                            label='Luxury'
                            path='/services'
                      />
                      </ul>
                      <ul className='cards__items'>
                      <Cards
                          src={require('../images/img-3.jpg')}
                            text='Explore the hidden waterfall deep inside the amazon jungle'
                            label='Adventure'
                            path='/services'
                      />
                      <Cards
                          src={require('../images/img-4.jpg')}
                            text='Explore the hidden waterfall deep inside the amazon jungle'
                            label='Adventure'
                            path='/services'
                      />
                      <Cards
                          src={require('../images/img-5.jpg')}
                            text='Explore the hidden waterfall deep inside the amazon jungle'
                            label='Adventure'
                            path='/services'
                      />
                  </ul>
              </div>
          </div>    
    </div>
  )
}
