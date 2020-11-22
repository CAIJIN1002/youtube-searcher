import styled from 'styled-components';

interface PropsType {
  active?: boolean;
}
const styles = {
  Root: styled.div<PropsType>`
    display: flex;
    border-radius: 50%;
    padding: 8px;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    user-select: none;
    color: ${props => (props.active ? 'white' : 'grey')};
    background-color: ${props => (props.active ? '#fd7c72' : 'white')};
    cursor: ${props => (props.active ? 'default' : ' pointer')}; ;
  `,
};

export default styles;
