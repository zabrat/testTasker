import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Wrapper.FormWrapper = styled.form`
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

Wrapper.exitBtn = styled.button`
  width: 25px;
  height: 25px;
  color: #FFD700;
  border: none;
  outline: none;
  background: none;
`;