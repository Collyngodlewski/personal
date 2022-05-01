import styled from "styled-components";


export const StyledHeader = styled.header`
  
nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #8d99ae;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    position: fixed;
    width: 100%;
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




`;

export const StyledBody = styled.div`

height: 100vh;
background-color: #edf2f4;
padding-top: 5%;
z-index: -10;
position: fixed;
width: 100%;

.contact-container{
  display: flex;
  justify-content: center;
  
  padding-bottom: 5%;
  width: 40%;
  margin: 0 auto;
  padding-top: 5%;
  
    border-radius: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    .contact-div{
      padding: 3% 0;
      input{
        display: flex;
        flex-direction: column;
      }
      textarea{
        display: flex;
        flex-direction: column;
        width: 100%;
      }

    }
  

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

  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  padding-top: 1%;
  background-color: #edf2f4;
  z-index: -10;
  position: fixed;
  width: 100%;

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

  // @media (max-height: 1080px){
  //     .line-1{
  //       display:none;
  //     }
  // }

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
    position: fixed;
    width: 100%;
    z-index: 10;
    bottom: 40%;
    background: #edf2f4;
    text-align: center;
    

    
  //   @media (max-width: 1377px){
  //     position: relative;
  //     z-index: 10;
  //     bottom: 25vh;
  //   }

  //   @media (max-height: 800px){
  //      position: relative;
  //      z-index: 10;
  //      bottom: 10vh;
  //   }

  //   @media (max-height: 650px){
  //     position: relative;
  //     z-index: 10;
  //     bottom: 0vh;
  //     padding-bottom: 10%;
  //  }
    
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
    font-size: 350%;
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
height: 100vh;
z-index: -10;
position: relative;
background-color: #edf2f4;
padding-top: 5%;





.card-container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  


  @media(max-width: 1000px){
    padding-top: 2%;
    display: flex;
    flex-direction: column;

    .card{
      margin: 0;
      width: 40%;
    }
  }
}

h3{
  color:  #2b2d42;
}

.card{

  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 2%;

  border-radius: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
   
    -webkit-transition: 0.5s;
    &:hover{
      -webkit-transform-origin: 0% 100%;
      transform: translateY(-2px);
    }

    img{
      width: 100%;
      margin: 0 auto;
      // padding-top: 1%;
     
    }

    a{
      color: #8d99ae;
        -webkit-transition: 0.5s;
        font-weight: 500;
        font-size: 1.5rem;
        text-decoration: none;
        padding-bottom: 1%;

        &:hover{
          color: #2b2d42;
          -webkit-transform-origin: 0% 100%;
        }

       
    }
}

`;

export const StyledResume = styled.div`
  height: 100vh;
  z-index: -10
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #edf2f4;
  // border-radius: 0.5rem;
  //         box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  

  
  
      
    @media (max-width: 1000px){
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      width: 40%;
    }

       button{
            width: 20%;
            padding: 2% 0;
            margin: 0 auto;
            margin-top: 2%;
            margin-bottom: 3%;
            -webkit-transition: 0.5s;
              &:hover{
                background-color: #8d99ae;
            }
         }

  
 
    
  }
`;