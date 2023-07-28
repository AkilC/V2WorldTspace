import React, { useEffect, useState, useRef } from 'react';
import nipplejs from 'nipplejs';
import { throttle } from 'lodash';

const MobileJoystick = () => {
  const [joystickManager, setJoystickManager] = useState(null);
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      const manager = nipplejs.create({
        zone: containerRef.current,
        mode: 'static',
        position: { left: '42px', top: '56px' },
        size: 100,
        color: 'white',
      });
      setJoystickManager(manager);
    }
  }, [containerRef]);

  useEffect(() => {
    if (joystickManager) {
      const onStart = (evt, data) => {
        console.log('Joystick start');
      };

      const onEnd = (evt, data) => {
        console.log('Joystick end');
        localStorage.setItem('joystickData', null);
      };

      const onMove = throttle((evt, data) => {
        const angle = data.angle.radian;
        const force = data.force;
        localStorage.setItem('joystickData', JSON.stringify({ angle, force }));
        console.log(data);
      }, 20);

      joystickManager.on('start', onStart);
      joystickManager.on('end', onEnd);
      joystickManager.on('move', onMove);

      return () => {
        joystickManager.off('start', onStart);
        joystickManager.off('end', onEnd);
        joystickManager.off('move', onMove);
      };
    }
  }, [joystickManager]);

  return <div ref={containerRef} className="joystick-container"></div>;
};

export default MobileJoystick;
