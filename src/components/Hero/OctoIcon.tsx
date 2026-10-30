// Original pixel octopus icon (OctopusDev). Uses currentColor so it follows text color.
const pixels: [number, number, number][] = [
  // [x, y, width]
  [5, 1, 6],
  [4, 2, 8],
  [3, 3, 10],
  [3, 4, 10],
  [3, 5, 3], [7, 5, 2], [10, 5, 3],
  [3, 6, 3], [7, 6, 2], [10, 6, 3],
  [3, 7, 10],
  [3, 8, 10],
  [3, 9, 1], [6, 9, 1], [9, 9, 1], [12, 9, 1],
  [2, 10, 1], [5, 10, 1], [10, 10, 1], [13, 10, 1],
  [2, 11, 1], [5, 11, 1], [10, 11, 1], [13, 11, 1],
  [3, 12, 1], [6, 12, 1], [9, 12, 1], [12, 12, 1],
  [4, 13, 1], [7, 13, 1], [8, 13, 1], [11, 13, 1],
];

const OctoIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    className={className}
    fill="currentColor"
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    {pixels.map(([x, y, w]) => (
      <rect key={`${x}-${y}`} x={x} y={y} width={w} height={1} />
    ))}
  </svg>
);

export default OctoIcon;
