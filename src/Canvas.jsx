import React, { useEffect, useRef, useState } from 'react';
import canvasImages from './canvasimages';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Define the Canvas component
const Canvas = ({ details }) => {

    // destructuring of the data
    const { startIndex, numImages, duration, size, top, left, zIndex } = details

    // Initialize state for the index and a reference to the canvas element
    const [index, setIndex] = useState({ value: startIndex });
    const canvasRef = useRef(null);

    // Use GSAP to animate the index value
    useGSAP(() => {
        gsap.to(index, {
            value: startIndex + numImages - 1, // Set the end value for the animation
            duration: duration, // Duration of the animation
            ease: "linear", // Linear easing for the animation
            repeat: -1, // Repeat the animation indefinitely
            onUpdate: () => {
                setIndex({ value: Math.round(index.value) }) // Update the state with the current value
            }
        })

        gsap.from(canvasRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        })
    });

    // Effect to handle canvas drawing
    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current; // Get the canvas element
        const ctx = canvas.getContext('2d'); // Get the 2D drawing context
        const img = new Image(); // Create a new image element
        img.src = canvasImages[index.value]; // Set the image source based on the current index
        img.onload = () => {
            canvas.width = canvas.offsetWidth * scale; // Set the canvas width to the image width
            canvas.height = canvas.offsetHeight * scale; // Set the canvas height to the image height
            canvas.style.width = canvas.offsetWidth + "px";
            canvas.style.height = canvas.offsetHeight + "px";

            ctx.scale(scale, scale);
            ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight); // Draw the image on the canvas
        };
    }, [index]); // The effect depends on the index state

    // Return the canvas element
    return <canvas
        data-scroll
        data-scroll-speed={(Math.random().toFixed(1))}
        ref={canvasRef}
        className='absolute'
        style={{
            width: `${size * 1.8}px`,
            height: `${size * 1.8}px`,
            top: `${top}%`,
            left: `${left}%`,
            zIndex: `${zIndex}%`
        }} // Styles for the canvas element
        id="canvas" // ID for the canvas element
    ></canvas>;
}

export default Canvas