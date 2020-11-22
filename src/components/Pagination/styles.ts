import styled from 'styled-components';

const styles = {
  Root: styled.div`
    display: flex;
    padding: 8px 12px;
    & > div {
      margin-right: 12px;
    }
    & > div:last-child {
      margin: 0;
    }
  `,
};

export default styles;
