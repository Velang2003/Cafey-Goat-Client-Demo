import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "light" | "ghost";
  className?: string;
};

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`.trim();
  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export function TextLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a className="text-link" href={href}>
      {children}
      <ChevronRight aria-hidden="true" size={16} />
    </a>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</p>
  );
}

export function GoatMark({ light = false }: { light?: boolean }) {
  return (
    // <svg
    //   aria-label="Cafey Goat"
    //   className={`goat-mark${light ? " goat-mark--light" : ""}`}
    //   role="img"
    //   viewBox="0 0 64 64"
    // >
    //   <path d="M18 30c2-8 9-12 18-10l7 2 5-6 5 1-3 8-5 3-3 15-4 9h-6l2-11-11 1-1 10h-6l-1-15-5-4 2-5 6 2Z" />
    //   <path d="M42 22c-4-6-3-10 1-13M47 19c2-6 5-8 9-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    // </svg>

    <svg
      aria-label="Cafey Goat"
      className={`goat-mark${light ? " goat-mark--light" : ""}`}
      role="img"
      viewBox="0 0 165 182"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path
          d="
      M116 66 L104 73 L75 73 L59 76 L38 83
      L24 91 L17 89 L8 78 L4 81 L2 80
      L2 78 L0 85 L3 92 L1 93 L5 96
      L11 96 L12 98 L10 99 L20 100
      L20 111 L26 121 L26 128 L19 137
      L19 180 L32 180 L27 172 L25 165
      L26 153 L28 148 L45 134 L47 134
      L48 136 L44 146 L53 162 L53 165
      L58 175 L58 180 L69 180 L57 158
      L56 147 L63 134 L71 124 L84 111
      L100 100 L111 89 L116 77 Z
    "
        />

        <path
          d="
      M120 19 L110 23 L91 34 L82 45
      L82 54 L86 62 L87 53 L91 46
      L97 40 L109 34 L120 31 L122 34
      L117 40 L123 40 L125 42 L124 55
      L121 60 L123 69 L121 81 L116 90
      L109 97 L84 116 L72 128 L99 127
      L103 130 L105 149 L104 178
      L107 181 L116 181 L110 169 L110 159
      L113 149 L115 133 L117 129 L133 129
      L139 132 L139 137 L131 150 L125 156
      L126 164 L139 153 L149 132 L148 126
      L139 119 L139 113 L145 101 L152 81
      L150 68 L142 54 L125 35 L121 27 Z
    "
        />

        <path
          d="
      M156 0 L147 3 L126 16 L126 25
      L130 33 L145 50 L150 58 L153 67
      L152 54 L150 48 L151 31 L155 22
      L159 19 L162 25 L164 25 L164 7 Z
    "
        />
      </g>
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`wordmark${light ? " wordmark--light" : ""}`}>
      <GoatMark light={light} />
      <span>cafey goat</span>
    </span>
  );
}
