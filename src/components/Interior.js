import React,{useRef,useState,useEffect} from 'react';
import ReactPlayer from 'react-player';
import Main from './videos/main_1.mp4'
import Part1 from './videos/document_6084755596458854695.mp4'
import Part2 from './videos/document_6084755596458854696.mp4'
const Interior = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const breakpoint = 560;
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const [playingIndex, setPlayingIndex] = useState(null); // keep track of which video is playing

  useEffect( ()=>{
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);
  const togglePlay = (index) => {
    const video = videoRefs[index].current;
    if (video.paused) {
      video.play();
      setPlayingIndex(index); // update the playing index
    } else {
      video.pause();
      setPlayingIndex(null); // reset the playing index
    }
  };

  const pauseOtherVideos = (index) => {
    // pause any other video that is not the current one
    videoRefs.forEach((ref, i) => {
      if (i !== index && !ref.current.paused) {
        ref.current.pause();
      }
    });
  };

  const handleClick = (index) => {
    // handle the click event on a video element
    togglePlay(index); // toggle the play/pause state of the clicked video
    pauseOtherVideos(index); // pause any other video that is playing
  };


  return (
    <div className="container">
      <div className={(width<breakpoint)?"":"row"}>
        <div className="col" 
        >
          <h2 style={{ textAlign: 'center' ,marginTop:'20px'}}><span className="text-primary">Panache</span> Interiors: Because Your House Deserves the Best</h2>
          {/* <p style={{ textJustify: 'inter-word' }}>Welcome to Panache, a haven of elegance and sophistication nestled within the world of interior design. As you step through our doors, you are transported into a realm where imagination and artistry intertwine to create breathtaking spaces that inspire and delight.

Every corner of Panache is meticulously curated to capture the essence of luxury and refinement. The showroom's ambience exudes a harmonious blend of warmth and opulence, inviting you to embark on a journey of exploration and self-expression. From the moment you arrive, our knowledgeable and passionate team of design experts are dedicated to assisting you in finding the perfect pieces to bring your vision to life.

Wander through our thoughtfully arranged vignettes, each one a vignette a symphony of colors, textures, and styles. Immerse yourself in the comfort of sumptuous sofas, marvel at the exquisite craftsmanship of hand-carved furniture, and admire the shimmering brilliance of crystal chandeliers that dance with light. Our collection represents a harmonious fusion of timeless classics and contemporary masterpieces, sourced from around the world to cater to a diverse range of tastes and preferences.

At Panache, we understand that interior design is an expression of individuality. Whether you seek a serene oasis of tranquility or a bold statement of avant-garde artistry, our team is here to guide you through the process. With a keen eye for detail and an unwavering commitment to quality, we assist you in selecting furnishings, fabrics, and accessories that align perfectly with your unique vision and lifestyle.

Beyond our impeccable selection of furniture and decor, Panache offers a bespoke design service, where our experts collaborate with you to create personalized interiors that reflect your personality and aspirations.</p> */}
        </div>
      </div>
      <div className={(width<breakpoint)?"":"row"} style={{margTop:'20px'}}>
        <div className={(width<breakpoint)?"":"col-4"} style={{ textAlign: 'justify' }}><p style={{ textJustify: 'inter-word' }}><span style={{fontWeight:'bolder',fontSize:'20px'}}>Welcome</span> to <span className="text-primary" style={{fontWeight:'bold'}}>Panache</span>, a haven of elegance and sophistication nestled within the world of interior design. As you step through our doors, you are transported into a realm where imagination and artistry intertwine to create breathtaking spaces that inspire and delight.

Every corner of Panache is meticulously curated to capture the essence of luxury and refinement. The showroom's ambience exudes a harmonious blend of warmth and opulence, inviting you to embark on a journey of exploration and self-expression. From the moment you arrive, our knowledgeable and passionate team of design experts are dedicated to assisting you in finding the perfect pieces to bring your vision to life.

Wander through our thoughtfully arranged vignettes, each one a vignette a symphony of colors, textures, and styles. Immerse yourself in the comfort of sumptuous sofas, marvel at the exquisite craftsmanship of hand-carved furniture, and admire the shimmering brilliance of crystal chandeliers that dance with light. Our collection represents a harmonious fusion of timeless classics and contemporary masterpieces, sourced from around the world to cater to a diverse range of tastes and preferences.
</p></div>
        <div className={(width<breakpoint)?"":"col-8"}>
          <div className="video-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
            <video
                  ref={videoRefs[0]}
                  src={Part1}
                  width="240"
                  height="426"
                  onClick={() => handleClick(0)}
                  style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer',borderRadius:'10px' }}
                  />
            </div>

            <div style={{ marginRight: '20px' }}>
              <video
                ref={videoRefs[1]}
                src={Main}
                width="300"
                height="426"
                onClick={() => handleClick(1)}
                style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' ,borderRadius:'10px'}}
              />
            </div>
            <div style={{display: 'flex', alignItems: 'center' }}>
              <video
                ref={videoRefs[2]}
                src={Part2}

                width="240"
                height="426"
                onClick={() => handleClick(2)}
                style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer',borderRadius:'10px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Interior;
