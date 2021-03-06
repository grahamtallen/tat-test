import Head from 'next/head';
import * as S from '../components/Test/styles';
//import currentImage from '../assets/TAT.jpg';
const styles = {};

interface GridBox {
  isTyping?: boolean;
  text?: string;
  emoji?: JSX.Element;
}

const imgSrc = `https://images1.fanpop.com/images/photos/1300000/Example-of-Thematic-Apperception-Test-psychology-1310980-305-400.gif`;

export default function Test(props: {
  headerText?: string;
  image?: JSX.Element;
  gridboxes?: GridBox[];
}) {
  const {
    headerText = (
      <span>
        What are the people in this image{' '}
        <span className="emphasis">thinking</span> and{' '}
        <span className="emphasis">feeling</span>?
      </span>
    ),
    image = <img width="100%" height="100%" src={imgSrc} />,
    gridboxes = [
      {
        isTyping: false,
        text: 'Submit your answer ',
        emoji: <span className="option-icon">&rarr;</span>,
      },
      {
        isTyping: false,
        text: 'Choose a different image...',
        emoji: <span className="option-icon">&lArr;</span>,
      },
    ],
  } = props;

  return (
    <S.Container>
      <Head>
        <title>TAT test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <S.Main>
        <S.Title> {headerText}</S.Title>

        <div className={styles.description}>{image}</div>
      </S.Main>

      <S.Footer>
        <div className={styles.grid}>
          {gridboxes.map((box, i) => {
            return (
              <div
                key={i}
                href="https://nextjs.org/docs"
                className={styles.card}
              >
                <h2>
                  {box.text} {box.emoji}
                </h2>
              </div>
            );
          })}
        </div>
      </S.Footer>
    </S.Container>
  );
}

const Header = () => {
  return (
    <header className="navheader">
      <pre className="addr">#0xDC25EF3F5B8</pre> there are <pre>3</pre> other
      testers
    </header>
  );
};
