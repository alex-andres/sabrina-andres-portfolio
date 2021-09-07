import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { MdClose } from 'react-icons/md';

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;

const StyledLightbox = styled(Dialog)`
position: relative;
.close{
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 2;
  padding: 0;
  line-height: .85;
}
}
`;
export default function Lightbox({ children }) {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <>
      <PreviewButton type="button" onClick={() => setShowLightbox(true)}>
        {children}
      </PreviewButton>
      {showLightbox && (
        <StyledLightbox>
          <button
            className="close"
            type="button"
            onClick={() => setShowLightbox(false)}
          >
            <MdClose />
          </button>
          {children}
        </StyledLightbox>
      )}
    </>
  );
}