'use client';

import {
  motion,
  useMotionValue,
  useTransform,
  MotionStyle,
} from 'framer-motion';

import './styles.css';

const FoldableMap = () => {
  const xDrag = useMotionValue(0);
  const xLeftSection = useTransform(xDrag, [0, 300], ['100%', '0%']);
  const xRightSection = useTransform(xDrag, [0, 300], ['-100%', '0%']);
  const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
  const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

  return (
    <div className="mx-auto grid aspect-video max-h-[80vh] p-8">
      <div className="grid grid-cols-3 [grid-area:1/1] aspect-video h-full w-full">
        <motion.div
          className="map-image origin-bottom-right border-r border-[rgb(255,255,255)]/[.1] shadow-2xl"
          style={{ x: xLeftSection, skewY: '-1deg' }}
        />
        <motion.div
          className="map-image brightness-[--brightness]"
          style={
            {
              scaleX: centerScale,
              '--brightness': centerBrightness,
            } as MotionStyle
          }
        />
        <motion.div
          className="map-image origin-bottom-left border-l border-[rgb(255,255,255)]/[.1] shadow-2xl"
          style={{ x: xRightSection, skewY: '1deg' }}
        />
      </div>
      <motion.div
        className="[grid-area:1/1] relative z-10"
        _dragX={xDrag}
        drag="x"
        dragConstraints={{ left: 0, right: 300 }}
      />
    </div>
  );
};

export default FoldableMap;
