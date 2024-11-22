/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import JavaIcon from '../assets/svg/java.svg?react'; // Import Java SVG component
import VSCodeIcon from '../assets/svg/vscode.svg?react'; // Import VSCode SVG component

interface TechIconProps {
  name: string;
  icon?: string;
  color: string;
  customIcon?: string;
}

// Custom SVG icons that aren't available on simpleicons.org
const customIcons: Record<string, JSX.Element> = {
  java: <JavaIcon />, // Imported SVG component
  vscode: <VSCodeIcon />,
};

export default function TechIcon({ name, icon, color, customIcon }: TechIconProps) {
  return (
    <div className="group relative flex flex-col items-center">
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800/50 backdrop-blur-sm 
        hover:scale-110 transition-transform duration-300"
      >
        {customIcon && customIcons[customIcon] ? (
          // Render the custom SVG component with additional props
          React.cloneElement(customIcons[customIcon], {
            className: 'w-6 h-6',
            style: { fill: `#${color}` }, // Use the style prop to apply fill color
          })
        ) : (
          icon && (
            <img
              src={`https://cdn.simpleicons.org/${icon}/${color}`}
              alt={name}
              className="w-6 h-6"
            />
          )
        )}
      </div>
      <span className="absolute -bottom-8 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
