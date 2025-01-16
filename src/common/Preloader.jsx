import Lottie from 'lottie-react';
import React, { useState, useEffect } from 'react';
import lottiePreloader from'../lottie/preloader.json'
const Preloader = () => {
    const [preLoader, setPreloader] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
            setPreloader(false);
            document.body.style.overflow = 'auto'
        }, 3000)
    }, []);

    return (
        <div>
            {preLoader ? (
                <div className="bg-black fixed inset-0 flex justify-center top-0 left-0 items-center z-[999] min-h-screen overflow-hidden">
                  <Lottie className='max-w-96 overflow-hidden' animationData={lottiePreloader}/>
                </div>
            ) : null}
        </div>
    );
};

export default Preloader;
