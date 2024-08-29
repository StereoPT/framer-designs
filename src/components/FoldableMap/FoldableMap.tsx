'use client';

import { useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  MotionStyle,
  useMotionValueEvent,
} from 'framer-motion';

import './styles.css';

const FoldableMap = () => {
  const [isFolded, setIsFolded] = useState(true);
  const xDrag = useMotionValue(0);
  const xLeftSection = useTransform(xDrag, [0, 300], ['100%', '0%']);
  const xRightSection = useTransform(xDrag, [0, 300], ['-100%', '0%']);
  const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
  const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

  useMotionValueEvent(xDrag, 'change', (currentX) => {
    if (currentX > 260) {
      setIsFolded(false);
    } else {
      setIsFolded(true);
    }
  });

  return (
    <div className="overflow-x-clip">
      <motion.div
        animate={isFolded ? 'folded' : 'open'}
        variants={{ open: { scale: 1 }, folded: { scale: 0.9 } }}
        initial="folded">
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
            className="[grid-area:1/1] relative z-10 cursor-grab active:cursor-grabbing"
            _dragX={xDrag}
            drag="x"
            dragConstraints={{ left: 0, right: 300 }}
            dragTransition={{
              modifyTarget: (target) => {
                return target > 150 ? 300 : 0;
              },
              timeConstant: 45,
            }}
          />
        </div>
        <motion.div
          className="flex w-full justify-center text-xl font-semibold md:text-4xl"
          variants={{
            folded: {
              opacity: 0,
              scale: 0.9,
              y: 30,
            },
            open: {
              opacity: 1,
              scale: 1,
              y: 0,
            },
          }}>
          <p className="rounded-2xl bg-white px-12 py-5 text-[hsl(73_69%_26%)]">
            Pick your Favourite Spot ☝️
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FoldableMap;
