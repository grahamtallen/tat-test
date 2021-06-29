const ImageReveal = ({
  size = 100,
  imageSrc = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Fe4%2F51%2F83%2Fe451835914bf2e1f0aa954dbc5610697.jpg&f=1&nofb=1',
}) => {
  const width = size;
  const height = size;

  const doubleWidth = size * 2;
  return (
    <svg
      viewBox={`0 0 50 50`}
      width={width}
      height={height}
      style={{
        background: `url(${imageSrc})`,
      }}
    >
      <defs>
        <mask id="mask" x="0" y="0" width={doubleWidth} height={height}>
          <rect x="0.5" y="0.5" width="49" height="49" fill="#fff" />
          <Letter x="15" char="C" />
          <Letter x="20" char="L" />
          <Letter x="25" char="I" />
          <Letter x="30" char="C" />
          <Letter x="35" char="K" />
        </mask>
      </defs>
      <rect
        x="0.5"
        y="0.5"
        width="49"
        height="49"
        mask="url(#mask)"
        fillOpacity="1"
        fill="#E3DFD2"
      />
    </svg>
  );
};

const Letter = ({ char = 'A', x = '20' }) => {
  return (
    <text x={x} textAnchor="middle" y="50" dy="0">
      {char}
    </text>
  );
};

export default ImageReveal;
