import styled from "styled-components";

export const StyledHeader = styled.header`
  
nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #8d99ae;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    position: relative;
    z-index: 0;
    padding-top: 1%;
    padding-bottom: 1%;

    .active{
      color:#edf2f4;
    }

    a {
        color: #2b2d42;
        -webkit-transition: 0.5s;
        font-weight: 500;
        font-size: 1.5rem;
        text-decoration: none;

        &:hover{
          color: #edf2f4;
          -webkit-transform-origin: 0% 100%;
        }
      }
  }


// ------------------------- Media Query Time! -----------------


`;

export const StyledBody = styled.div`

height: calc(100vh - 100px);
  display: flex;
  flex-flow: column wrap;
  padding-top: 1%;
  background-color: #edf2f4;
  z-index: -1;
  position: relative;

  h1{
      margin: 0 auto;
  }

  
`;

export const StyledHome = styled.div`




height: calc(100vh - 100px);
  display: flex;
  flex-flow: column wrap;
  padding-top: 1%;
  background-color: #edf2f4;
  z-index: -1;
  position: relative;

  h1{
      margin: 0 auto;
  }

  p{
      margin: 0 auto;
      width: 70%;
  }

  .name{
      padding-top: 5%;
      text-align: center;
      margin: 0 auto;
      font-size: 10rem;
      color: #2b2d42;
  }
  
  @media (max-width: 1050px){
    font-size: .5rem;
    .name{
      font-size: 7rem;
    }
  }

  
`;

export const StyledImg = styled.div`

img {height: 100vh
}`

export const StyledAnimation = styled.div`
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);


html{
  min-height: 100%;
  overflow: hidden;
}
body{
  height: calc(100vh - 8em);
  padding: 4em;
  color: #2b2d42;
  font-family: 'Anonymous Pro', monospace;  
  background-color: #2b2d42;  
}
.line-1{
    position: relative;
    top: 50%;  
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid #2b2d42;
    font-size: 300%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);  
    color:  #2b2d42;
}


.anim-typewriter{
  animation: typewriter 2s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 12em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: #2b2d42;}
  to{border-right-color: transparent;}
}`