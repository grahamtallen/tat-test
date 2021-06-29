import * as S from './styles';
import './svg.css';

const ImageReveal = ({
  size = '50',
  title = 'Imagesrc',
  imageSrc = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Fe4%2F51%2F83%2Fe451835914bf2e1f0aa954dbc5610697.jpg&f=1&nofb=1',
}) => {
  const width = size;
  const height = size;
  return (
    <S.Wrapper>
      <svg
        viewBox="0 0 50 50"
        width={width}
        height={height}
        style={{
          background: `url(${imageSrc})`,
        }}
      >
        <defs>
          <mask id="mask" x="0" y="0" width="100" height="49">
            <rect x="0.5" y="0.5" width="49" height="49" fill="#fff" />
            <text x="20" textAnchor="middle" y="25" dy="0">
              T
            </text>
            <text x="25" id="ltrV" textAnchor="middle" y="25" dy="0">
              O
            </text>
            <text x="30" textAnchor="middle" y="25" dy="0">
              U
            </text>
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
    </S.Wrapper>
  );
};

export default ImageReveal;
