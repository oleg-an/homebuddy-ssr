import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface WizardWrapperProps {
  children: React.ReactNode;
}

export function WizardWrapper({children}: WizardWrapperProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return createPortal(<div className="top-0 left-0 w-screen h-screen bg-white fixed">
    {children}
  </div>, document.body);
}
