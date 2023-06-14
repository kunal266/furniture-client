import React,{useRef} from 'react';
import ReactPlayer from 'react-player';
import Main from './videos/main_1.mp4'
import Part1 from './videos/document_6073161950718593446.mp4'
import Part2 from './videos/document_6073161950718593446.mp4'
const Interior = () => {
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const togglePlay = (index) => {
    const video = videoRefs[index].current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Text</h2>
          <p>Some sample text goes here.</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="video-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ marginRight: '10px' }}>
              <video
                ref={videoRefs[0]}
                src="video1.mp4"
                width="240"
                height="426"
                onClick={() => togglePlay(0)}
                style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
              />
            </div>
            <div style={{ marginRight: '10px' }}>
              <video
                ref={videoRefs[1]}
                src="video2.mp4"
                width="240"
                height="426"
                onClick={() => togglePlay(1)}
                style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
              />
            </div>
            <div>
              <video
                ref={videoRefs[2]}
                src="video3.mp4"
                width="240"
                height="426"
                onClick={() => togglePlay(2)}
                style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Interior;
