# react-scrolling-carousel
A scrolling carousel component for React

Carousel
=======================

Renders standard horizontal scrolling image carousel. Images have a max height, anything under will be displayed at actual height.

###### Basic Implementation
```JSX
import React from 'react';
import Carousel from '@concur/nui-widgets';

export default React.createClass({

    render() {
        return (
            <Carousel images={['http://image-path', 'https://second-image-path']}/>
        );
    }
});
```

#### Carousel Configuration
* **images:** `PropTypes.array` An array of image paths.
* **maxHeight** `PropTypes.string` Max height of images. Defaults to 450px.

#### Helper Classes
* `.image-carousel-container` The class for the wrapper div. Can use this to implement media queries, and other customizations, etc.