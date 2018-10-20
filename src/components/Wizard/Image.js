import React, { Component } from 'react'
import { Picture } from 'react-responsive-picture';
import no_image from './no_image.png'
 

class Image extends Component {
    render() {
        return (
            <Picture
                sources = {[
                    {
                        srcSet: "./no_image.png, ./no_image.png2x",
                        media: "(max-width: 420px)",
                    },
                    {
                        srcSet: "./no_image.png 1x, ./no_image.png 2x",
                    },
                    {
                        srcSet: "path-to-desktop-image.webp",
                        type: "image/webp"
                    }
                ]}
            />
        );
    };
}

export default Image