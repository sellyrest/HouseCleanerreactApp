import React from 'react';
import Aturakun from './image/aturAkun.PNG';
import Pin from './image/pinKeamanan.PNG';
import Syarat from './image/syaratdketentuan.PNG';
import Privasi from './image/privasi.PNG';


function profilecont({ name, description, children }) {
    const profile = {
        color : 'blue',
    }
    return (
    <><></><div className="profilecont" style={profile}>
            <h1>{name}</h1>
            <p>{description}</p>
            {children}
            <h5>Akun</h5>
            <img src={Aturakun} className="App-button" alt='aturAkun' />
            <img src={Pin} className="App-button" alt='pinKeamanan' />
            <h5>Lainnya</h5>
            <img src={Syarat} className="App-button" alt='syaratdketentuan' />
            <img src={Privasi} className="App-button" alt='privasi' />

        </div><div styles={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)', overflowY: 'scroll'
        }}></div></>
    )
};
export default profilecont;