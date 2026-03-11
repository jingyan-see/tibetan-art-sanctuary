import { ReactNode } from "react";

const OrnateFrame = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="tibetan-corner tibetan-corner-tl" />
    <div className="tibetan-corner tibetan-corner-tr" />
    <div className="tibetan-corner tibetan-corner-bl" />
    <div className="tibetan-corner tibetan-corner-br" />
    {children}
  </div>
);

export default OrnateFrame;
