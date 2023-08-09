import React from 'react';
import './Meme.css'
import MemeNavbar from './MemeNavbar';
import Meme from './Meme';

export default function MemePage() {
  return (
    <div className="meme-page">
      <MemeNavbar />
      <Meme/>
    </div>
  );
}
