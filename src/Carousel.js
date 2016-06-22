import React from 'react';

const Carousel = ({ images, maxHeight }) => {
    return (
      <div className='image-carousel-container' style={{ overflowX: 'hidden'}}>
        <div style={{
            maxHeight: maxHeight ? maxHeight : '450px',
            overflowX: 'scroll',
            overflowY: 'hidden',
            whiteSpace: 'nowrap'
        }}>
          {
            images && images.map(( el, i ) => (
              <div key={i} style={{ display: 'inline-block', verticalAlign: 'bottom' }}>
                <img alt={`screenshot${i}`} src={el} style={{ maxHeight: maxHeight ? maxHeight : '450px' }} />
              </div>
            ))
          }
        </div>
      </div>
    );
};

Carousel.propTypes = {
    images: React.PropTypes.array,
    maxHeight: React.PropTypes.string
}

export default Carousel;