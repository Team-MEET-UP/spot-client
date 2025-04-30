import { forwardRef } from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(({ children, ...props }, ref) => (
  <div
    ref={ref}
    className="fixed left-0 right-0 bottom-0 z-[1000] bg-white rounded-t-2xl shadow-lg transition-transform duration-200 touch-none"
    {...props}
  >
    {children}
  </div>
));
