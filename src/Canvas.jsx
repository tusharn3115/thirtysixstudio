import React, { useEffect, useRef } from 'react';
import canvasImages from './canvasimages';

const Canvas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = canvasImages[0];
    }, [])


    return <canvas 
    ref={canvasRef} 
    id="canvas"
    className="w-[18rem] h-[18rem]"
    ></canvas>;
}

export default Canvas