import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface WizardWrapperProps {
  children: React.ReactNode;
  hideClose?: boolean;
}

export function WizardWrapper({ children }: WizardWrapperProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return createPortal(<div className="top-0 left-0 w-screen h-screen bg-white fixed">
    <div className="bg-deep-blue-25 h-full">
      <div className="h-full container px-4 pt-4 position-relative">
        <div className="flex justify-between">
          <img alt="" src="/header-logo.svg"/>
          <div>close</div>
        </div>
        {children}
      </div>
    </div>
  </div>, document.body);
}
