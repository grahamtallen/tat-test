import * as S from './styles';

const ImageReveal = ({ size = '50', title = 'Imagesrc' }) => {
  const width = size;
  const height = size;
  return (
    <S.Wrapper>
      <svg viewBox="0 0 50 50" width={width} height={height}>
        <defs>
          <rect x="0.5" y="0.5" width="49" height="49" fill="#fff" />
        </defs>
      </svg>
    </S.Wrapper>
  );
};

export default ImageReveal;
