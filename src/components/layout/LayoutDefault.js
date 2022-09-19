import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

const LayoutDefault = ({ children }) => {
  const [HideShowHeader, setHideShowHeader] = useState(false);
  return (
    <StyledWrapper>
      <Header setHideShowHeader={setHideShowHeader} />
      <Sidebar
        HideShowHeader={HideShowHeader}
        setHideShowHeader={setHideShowHeader}
      />
      <div className="content">{children}</div>
      <Footer/>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div``;
export default LayoutDefault;
