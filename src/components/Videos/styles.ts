import styled from 'styled-components';

const styles = {
  Root: styled.div``,
  Container: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    padding: 32px 64px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 8px 16px;
      grid-gap: 12px;
    }
  `,
};

export default styles;
