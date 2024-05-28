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

  background-color: var(--red);
  border-radius: 16px;

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

export const Menu = styled.div`
  background-color: var(--white);
  border-radius: 16px;
`
