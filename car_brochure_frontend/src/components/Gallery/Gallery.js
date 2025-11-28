import React, { useCallback, useRef, useState } from 'react';
import styles from './Gallery.module.css';

export default function Gallery({ images = [], title = 'Gallery' }) {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((idx) => {
    const el = scrollerRef.current?.children?.[idx];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActive(idx);
    }
  }, []);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollToIndex(Math.min(active + 1, images.length - 1));
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollToIndex(Math.max(active - 1, 0));
    }
  };

  return (
    <section className="container" aria-label={title}>
      <div className={styles.frame} role="region" aria-roledescription="carousel" aria-label="Car images">
        <div
          className={styles.scroller}
          ref={scrollerRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {images.map((src, i) => (
            <figure key={i} className={styles.item}>
              <img
                src={src}
                alt={`Car view ${i + 1}`}
                loading="lazy"
                srcSet={`${src}&w=600 600w, ${src}&w=1000 1000w, ${src}&w=1600 1600w`}
                sizes="(max-width: 900px) 90vw, 800px"
              />
            </figure>
          ))}
        </div>
        <div className={styles.controls}>
          <button className="btn" aria-label="Previous image" onClick={() => scrollToIndex(Math.max(active - 1, 0))}>‹</button>
          <button className="btn" aria-label="Next image" onClick={() => scrollToIndex(Math.min(active + 1, images.length - 1))}>›</button>
        </div>
        <div className={styles.thumbs} role="tablist" aria-label="Thumbnails">
          {images.map((src, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              className={`${styles.thumb} ${active === i ? styles.thumbActive : ''}`}
              onClick={() => scrollToIndex(i)}
            >
              <img src={src} alt={`Thumbnail ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
