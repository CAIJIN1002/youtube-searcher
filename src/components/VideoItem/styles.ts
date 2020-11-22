import styled from 'styled-components';

const styles = {
  Root: styled.div`
    overflow: hidden;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.div`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
  VideoThumbnail: styled.img`
    width: 100%;
    height: auto;
    display: flex;
    margin-bottom: 8px;
  `,
  Link: styled.a`
    text-decoration: none;
    color: black;
  `,
};

export default styles;
