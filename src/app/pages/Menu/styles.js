import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  position: relative;

  background-color: var(--yellow);

  .orders {
    height: fit-content;
    position: absolute;
    top: 24px;
    right: 160px;

    background-color: transparent;
    font-size: 48px;
    color: var(--red);
    border: none;
  }

  .logout {
    height: fit-content;
    position: absolute;
    top: 22px;
    right: 64px;

    background-color: transparent;
    font-size: 52px;
    color: var(--red);
    border: none;
  }
`

export const Content = styled.div`
  width: 40%;
  height: fit-content;
  margin: 96px auto;
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

  .topic {
    width: fit-content;
    margin: 8px auto;

    font-size: 26px;
    color: var(--red);
    border-bottom: 3px solid var(--red);
  }
`

export const Menu = styled.div`
  background-color: var(--white);
  border-radius: 16px;
`

export const CartButton = styled.button`
  position: fixed;
  padding: 16px;
  bottom: 10vh;
  right: 5vw;

  border: none;
  border-radius: 100%;
  background-color: var(--red);

  transition: all 0.3s;

  span {
    display: flex;
    font-size: 32px;
    color: var(--white);
  }

  &:hover {
    padding: 20px;
    right: 4.8vw;
    bottom: 9.5vh;
  }
`
