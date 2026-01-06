import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <iframe 
        src={`${process.env.PUBLIC_URL}/NguyenVietTrung.pdf`}
        className="pdf-viewer"
        title="NguyenVietTrung Resume"
      />
    </div>
  );
}

export default App;
