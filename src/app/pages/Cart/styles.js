import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;

  background-color: var(--yellow);
`

export const Content = styled.div`
  width: 40%;
  height: fit-content;
  margin: 64px auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  position: relative;

  background-color: var(--red);
  border-radius: 16px;

  button {
    position: absolute;
    top: 20px;
    left: 20px;

    background-color: transparent;
    color: var(--white);
    font-size: 28px;
    border: none;
  }

  h1 {
    display: flex;
    color: var(--yellow);
    justify-content: center;
    gap: 10px;
  }

  span {
    font-size: 42px;
  }
`
