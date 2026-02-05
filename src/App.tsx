import './App.css';
import { Menu } from './Menu';
import { useState } from 'react';
import icon from './assets/icon.png';

function App() {
  const [page, setPage] = useState('home');
  let content;
  if (page === 'home') {
    content = (
    <div>
      <h2>はじめまして！</h2>
      <p>うゆてこです！</p>
      <p>これからよろしく！</p>
    </div>
    );
  } else if (page === 'profile') {
    content = (
    <div>
      <h2>自己紹介</h2>
      <p>うゆてこです！</p>
      <p>タコが好きです</p>
    </div>
    );
  }
  return (
    <>
    <Menu onPageChange={setPage} currentPage={page} />
        <div className="hero">
          <h1>うゆてこのホームページ</h1>
          <img src={icon} alt="うゆてこのアイコン" style={{ width: '100px', borderRadius: '50%' }}></img>
            {content}
        </div>
    </>
  )
}

export default App
