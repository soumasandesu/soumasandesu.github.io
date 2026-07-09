import { useRef, useEffect } from 'react';
import ClassNames from 'classnames';
import * as OV from 'online-3d-viewer';

import styles from './styles.module.scss';

export default function Online3dViewer({
    modelUrls = [],
    className,
    ...props
}) {
    const containerRef = useRef(null);
    const viewerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // get the parent element of the viewer
        const parentDiv = containerRef.current;

        // initialize the viewer with the parent element and some parameters
        viewerRef.current = new OV.EmbeddedViewer(parentDiv, {
            backgroundColor: new OV.RGBAColor(255, 255, 255, 0),
            defaultColor: new OV.RGBColor(200, 200, 200),
            edgeSettings: new OV.EdgeSettings(false, new OV.RGBColor(0, 0, 0), 1),
        });

        return () => {
            viewerRef.current.Destroy();
        };
    }, []);

    useEffect(() => {
        if (!viewerRef.current) return;
        const viewer = viewerRef.current;

        if (typeof modelUrls === 'string') {
            viewer.LoadModelFromUrlList([modelUrls]);
        } else {
            viewer.LoadModelFromUrlList(modelUrls);
        }
    }, [modelUrls]);

    return <div className={ClassNames(styles.Online3dViewer, className)} ref={containerRef} {...props} />;
}