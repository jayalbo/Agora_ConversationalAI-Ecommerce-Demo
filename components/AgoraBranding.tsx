// Agora Branding Component
export function AgoraLogo({ className = "h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 399.34668 137.06667"
      className={className}
      role="img"
      aria-label="Agora"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        d="m 1676.5,1027.77 c -168.56,0 -305.69,-137.129 -305.69,-305.68 0,-168.551 137.13,-305.672 305.69,-305.672 168.55,0 305.66,137.121 305.66,305.672 0,168.551 -137.11,305.68 -305.66,305.68 m 0,-474.231 c -92.95,0 -168.56,75.609 -168.56,168.551 0,92.937 75.61,168.551 168.56,168.551 92.93,0 168.55,-75.614 168.55,-168.551 0,-92.942 -75.62,-168.551 -168.55,-168.551"
        fill="currentColor"
        fillRule="nonzero"
        transform="matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
      />
      <path
        d="m 2185.11,949.031 -3.85,-3.722 -4.07,-3.938 -2.68,4.988 -2.54,4.723 c -22.03,40.938 -62.59,69.108 -108.49,75.338 l -11.34,1.54 V 416.219 l 11.43,1.66 c 62.57,9.09 125.7,57.109 125.7,143.91 v 160.27 c 0,85.332 66.43,158.98 151.23,167.671 l 8.98,0.918 v 137.222 l -10.97,-1.07 c -53.18,-5.22 -106.22,-32.109 -153.4,-77.769"
        fill="currentColor"
        fillRule="nonzero"
        transform="matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
      />
      <path
        d="m 501.902,967.207 -2.422,-3.363 -2.57,-3.547 -3.5,2.648 -3.301,2.512 C 436.578,1006.09 372.801,1027.57 305.68,1027.57 137.129,1027.57 0,890.438 0,721.887 0,553.336 137.129,416.203 305.68,416.203 c 67.121,0 130.89,21.481 184.41,62.121 l 3.32,2.512 3.492,2.648 2.567,-3.55 2.433,-3.36 c 23.231,-32.097 58.989,-53.597 98.098,-59 l 11.359,-1.558 V 1027.77 L 600,1026.21 c -39.109,-5.39 -74.867,-26.905 -98.098,-59.003 M 305.68,553.336 c -92.942,0 -168.551,75.609 -168.551,168.551 0,92.937 75.609,168.551 168.551,168.551 92.941,0 168.55,-75.614 168.55,-168.551 0,-92.942 -75.609,-168.551 -168.55,-168.551"
        fill="currentColor"
        fillRule="nonzero"
        transform="matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
      />
      <path
        d="m 2983.74,1026.2 c -39.11,-5.4 -74.86,-26.899 -98.09,-58.997 l -2.43,-3.351 -2.57,-3.559 -3.49,2.66 -3.31,2.508 c -53.52,40.629 -117.3,62.109 -184.43,62.109 -168.55,0 -305.67,-137.129 -305.67,-305.679 0,-168.547 137.12,-305.68 305.67,-305.68 67.13,0 130.91,21.48 184.44,62.109 l 3.3,2.512 3.49,2.648 2.57,-3.546 2.43,-3.364 c 23.23,-32.097 58.98,-53.597 98.09,-59 l 11.36,-1.558 V 1027.76 Z M 2689.42,553.344 c -92.93,0 -168.55,75.609 -168.55,168.547 0,92.941 75.62,168.55 168.55,168.55 92.94,0 168.55,-75.609 168.55,-168.55 0,-92.938 -75.61,-168.547 -168.55,-168.547"
        fill="currentColor"
        fillRule="nonzero"
        transform="matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
      />
      <path
        d="m 1186.88,483.656 c 69.87,56.071 114.72,142.086 114.72,238.438 0,63.441 -19.44,122.422 -52.66,171.32 -4.43,6.52 -9.19,12.789 -14.09,18.941 37.55,23.829 59.28,64.008 65.09,103.985 l 1.66,11.43 H 994.605 v -0.04 C 826.664,1027.02 690.254,890.195 690.254,722.094 c 0,-96.36 44.859,-182.391 114.75,-238.461 -13.117,-10.528 -25.391,-22.059 -36.609,-34.57 l 93.23,-102.161 c 30.809,40.59 79.539,66.864 134.309,66.864 92.936,0 168.546,-75.614 168.546,-168.551 0,-60.27 -31.82,-113.223 -79.52,-143.02 L 1178.22,0 c 74.83,55.7734 123.38,144.926 123.38,245.215 0,96.348 -44.85,182.367 -114.72,238.441 M 995.813,890.637 h 0.242 c 92.875,-0.063 168.425,-75.645 168.425,-168.543 0,-92.942 -75.61,-168.551 -168.546,-168.551 -92.942,0 -168.551,75.609 -168.551,168.551 0,92.898 75.543,168.48 168.43,168.543"
        fill="currentColor"
        fillRule="nonzero"
        transform="matrix(0.13333333,0,0,-0.13333333,0,137.06667)"
      />
    </svg>
  );
}

export function AgoraBranding({ variant = "header" }: { variant?: "header" | "badge" | "footer" }) {
  if (variant === "badge") {
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-[#0093E9] dark:text-[#34b7ee]">
          <AgoraLogo className="h-3" />
        </div>
        <span className="text-[10px] text-gray-600 dark:text-gray-300 font-medium">
          Convo AI
        </span>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className="flex items-center justify-center gap-2 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <span className="text-xs text-gray-500 dark:text-gray-400">Powered by</span>
        <a
          href="https://www.agora.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[#0093E9] dark:text-[#34b7ee] hover:text-[#34b7ee] dark:hover:text-[#5ac8f5] transition-colors duration-200"
        >
          <AgoraLogo className="h-4" />
        </a>
        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">Conversational AI</span>
      </div>
    );
  }

  // Header variant (default)
  return (
    <a
      href="https://www.agora.io"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#0093E9] dark:text-[#34b7ee] hover:text-[#34b7ee] dark:hover:text-[#5ac8f5] transition-colors duration-200"
    >
      <AgoraLogo className="h-5" />
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-gray-900 dark:text-white">Conversational AI</span>
        <span className="text-[10px] text-gray-500 dark:text-gray-400">Powered by Agora</span>
      </div>
    </a>
  );
}

