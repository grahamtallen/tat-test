import { Layout, Drawer, Input } from 'antd';
import ImageReveal from 'components/ImageReveal';
import React, { useState, useEffect } from 'react';
const { Search } = Input;
const { Header, Content } = Layout;
const DELAY_BEFORE_SHOWING_IMAGE = 1500;

const BottomInput = () => {
  return (
    <Search
      placeholder="Submit your answer and compare it to others"
      enterButton="Submit"
      size="large"
    />
  );
};

const imgSrc = `https://images1.fanpop.com/images/photos/1300000/Example-of-Thematic-Apperception-Test-psychology-1310980-305-400.gif`;
export default function Splash(props: any) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const image = <ImageReveal imageSrc={imgSrc} size={200} />;
  useEffect(() => {
    setTimeout(() => {
      setDrawerOpen(true);
    }, DELAY_BEFORE_SHOWING_IMAGE);
  });
  const drawerStyle = {
    background: '#001529',
    padding: 'none',
  };
  const {
    headerText = (
      <span>
        What are the people in this image{' '}
        <span className="emphasis">thinking</span> and{' '}
        <span className="emphasis">feeling</span>?
      </span>
    ),
  } = props;
  return (
    <Layout>
      <Header
        style={{
          color: 'white',
        }}
      >
        Header
      </Header>

      <Content
        style={{
          height: '100vh',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: '1.1rem',
        }}
      >
        {headerText}
        {image}
      </Content>
      <Drawer
        height={49}
        placement="bottom"
        closable={false}
        maskClosable={true}
        mask={false}
        onClose={() => setDrawerOpen(false)}
        visible={drawerOpen}
        style={drawerStyle}
        headerStyle={drawerStyle}
        maskStyle={drawerStyle}
        drawerStyle={drawerStyle}
      >
        <BottomInput />
      </Drawer>
    </Layout>
  );
}
