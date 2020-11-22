import styled from 'styled-components';

const styles = {
  Root: styled.div`
    min-width: 300px;
    height: 100%;
  `,
  Input: styled.input`
    font-size: 18px;
    background: transparent;
    border: 0;
    color: #ffffff;
    border-bottom: 2px solid;
    display: flex;
    outline: 0;
    padding: 8px 12px;
    width: 100%;
  `,
  Adornment: styled.div`
    width: 50px;
    height: inherit;
    position: absolute;
    right: 0;
    top: 0;
    color: #ffffff;
    display: ${props => (props.hidden ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
};

export default styles;
