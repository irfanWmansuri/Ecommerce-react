import { useEffect, useRef } from 'react';

export function SubMenu({ isOpen, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isOpen) {
      el.style.transition = 'height 300ms ease';
      el.style.height = `${el.scrollHeight}px`;

      const handleTransitionEnd = () => {
        el.style.height = 'auto'; 
        el.removeEventListener('transitionend', handleTransitionEnd);
      };

      el.addEventListener('transitionend', handleTransitionEnd);
    } else {
      if (el.style.height === 'auto') {
        el.style.height = `${el.scrollHeight}px`; 
        requestAnimationFrame(() => {
          el.style.transition = 'height 300ms ease';
          el.style.height = '0px';
        });
      } else {
        el.style.transition = 'height 300ms ease';
        el.style.height = '0px';
      }
    }
  }, [isOpen]);

  return (
    <ul
      ref={ref}
      className="pl-8 mt-1 space-y-1 overflow-hidden"
      style={{ height: '0px' }}
    >
      {children}
    </ul>
  );
}
