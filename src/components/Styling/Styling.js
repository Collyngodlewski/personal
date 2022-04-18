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
          transform: translateY(-2px);
        }
      }
  }




`;

export const StyledBody = styled.div`

height: calc(100vh - 212px);
background-color: #edf2f4;
padding-top: 5%;

.contact-container{
  display: flex;
  justify-content: center;
  padding-bottom: 5%;
  width: 50%;
  margin: 0 auto;
  padding-top: 5%;
  
    border-radius: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  

  input{
    margin-top: 2%;
    padding: 2% 0;
  }

  textarea{
    padding: 5% 0;
  }
 
  button{
    margin-top: 4%;
    padding: 3%;
    -webkit-transition: 0.5s;
    &:hover{
     
      background-color: #8d99ae;
    }
}

  
`;

export const StyledHome = styled.div`



height: calc(100vh - 182px);
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
      font-size: 8rem;
      color: #2b2d42;
  }
  }



  @media (max-width: 750px){
    .name{
      width: 70%;
      font-size: 4rem;
      text-align: center;
      align-content: center;
      }

    .line-1{
      display: none;
    }
    
  }

`;

export const StyledLinks = styled.div`
  background: #edf2f4;

  .links-container{
    position: relative;
    z-index: 10;
    bottom: 35vh;
    background: #edf2f4;
    text-align: center;

    
    @media (max-width: 1377px){
      position: relative;
      z-index: 10;
      bottom: 25vh;
    }
    
    a {
      color: #2b2d42;
      -webkit-transition: 0.5s;
      font-size: 1.5rem;
      margin: 0 1rem;
      display: inline-block;

      &:hover{
        color: #8d99ae;
        -webkit-transform-origin: 0% 100%;
        transform: translateY(-2px);
      }
   
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
    top: 30%;  
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
  to{width: 12.5em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: #2b2d42;}
  to{border-right-color: transparent;}
}`

export const StyledProjects = styled.div`
height: calc(100vh - 212px);
background-color: #edf2f4;
padding-top: 5%;
  display: flex;
  justify-content: center;
`;

export const StyledResume = styled.div`
  display: flex;
  justify-content: center;
`;