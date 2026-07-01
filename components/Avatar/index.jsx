import { useEffect } from "react";
import Image from "next/image";
import ClassNames from "classnames";
import useEmblaCarousel from 'embla-carousel-react';

import { DotButton, useDotButton } from './DotButton';

import styles from "./styles.module.scss";

export default function Avatar({
    containerProps: {
        className,
        ...containerProps
    } = {},
    srcSet,
    initPos,
    ...props
}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.scrollTo(initPos);
        }
    }, [emblaApi, initPos]);

    return (
        <div className={ClassNames(styles.Avatar, className)} {...containerProps}>
            <div className={styles.Embla}>
                <div className={styles.Viewport} ref={emblaRef}>
                    <div className={styles.Container}>
                        {srcSet.map((src, i) => (
                            <div className={ClassNames(styles.Slide)} key={i}>
                                <div className={styles.AvatarImageContainer}>
                                    <Image
                                        src={src}
                                        alt=""
                                        fill
                                        unoptimized
                                        loading={i === initPos ? 'eager' : 'lazy'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.Dots}>
                    {srcSet.map((_, i) => (
                        <DotButton
                            key={i}
                            onClick={() => onDotButtonClick(i)}
                            className={ClassNames(styles.Dot, i === selectedIndex && styles.Selected)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}