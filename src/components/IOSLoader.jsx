import React from "react";

/**
 * IOSLoader component that mimics the classic iOS activity indicator.
 * @param {Object} props
 * @param {string|number} props.size - small, medium, large or a number
 * @param {string} props.color - CSS color string
 * @param {string} props.className - Additional CSS classes
 */
export default function IOSLoader({
  size = "large",
  color = "#AEAEB2",
  className = "",
}) {
  const sizes = {
    small: 20,
    medium: 32,
    large: 64,
  };

  const spinnerSize =
    typeof size === "number" ? size : sizes[size] || sizes.medium;
  const lineCount = 12;

  // We use rects instead of lines to better control the pill shape and thickness
  const bars = Array.from({ length: lineCount }).map((_, i) => {
    // Each bar is rotated by 30 degrees (360 / 12)
    const rotation = i * 30;
    // Animation delay to create the spinning effect
    const delay = i * 0.1 - 1.2;

    return (
      <rect
        key={i}
        x="44"
        y="10"
        width="12"
        height="28"
        rx="6"
        ry="6"
        fill="currentColor"
        transform={`rotate(${rotation} 50 50) translate(0, -10)`}
        className="ios-activity-line"
        style={{ animationDelay: `${delay}s` }}
      />
    );
  });

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: spinnerSize, height: spinnerSize }}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        style={{ color }}
        aria-label="Loading..."
      >
        {bars}
      </svg>
    </div>
  );
}
