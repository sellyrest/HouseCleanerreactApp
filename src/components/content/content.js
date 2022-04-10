import React from 'react';
import { useState } from "react";
import { ContentWrap, Grid } from './contentStyles';
import baner from './image/banner.PNG';
import banerpromo from './image/Baner promohc.PNG';
import banerpromo2 from './image/bpromo2.PNG';
import banerpromo3 from './image/banpromo3.PNG';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Content({ name, description, children }) {
    const [greetingState, setGreeting] = useState("Sibuk? banyak kerjaan sampai lupa beres - beres rumah?")  
    const home = {
    color: 'blue',
  }
  return (
    <><div className="content" style={home}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{greetingState}</p>
          {children}
      </div>
      <div styles={{ position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)' , overflowY: 'scroll' }}>
              <ContentWrap>
                  <Grid>
                  <h3>Solusi Mudah Bersihkan Rumah </h3>
                  <div className="boxWrap">
                      <img src={baner} className="App-image" alt="banner" />
                      <div className="img"></div>
                      <div className="cont"></div>
                    <h4>Flash Sale</h4>

                    <p>Promo terbatas waktu, Ayo pesan sekarang!</p>
                    <img src={banerpromo} className="App-image" alt='banerpromo' />
                    <h4>Semua Promo</h4>
                    <h5>lihat semua tawaran menarik kami</h5>
                    <img src={banerpromo2} className="App-image" alt='banerpromo2' />
                    <img src={banerpromo3} className="App-image" alt='banerpromo3' />

                      <Button
        onClick={() => {
          setGreeting("Kini ada aplikasi HouseCleaner yang bisa membantu anda menyelesaikan pekerjaan rumah ! ")
        }}
      >
        change greeting
      </Button>
      

      <Link to="/profile">
          <Button>to profile</Button>
        </Link>
          
                  </div>
                          
                  </Grid>

              </ContentWrap>

          </div></>
  )
};
export default Content;