// Source - https://stackoverflow.com/a/66953317
// Posted by juliomalves, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-01, License - CC BY-SA 4.0

import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = (props) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
            {...rest}
            src={imgSrc}
            unoptimized
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default ImageWithFallback;
