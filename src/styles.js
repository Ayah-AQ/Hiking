import styled from "styled-components";
import { Link } from "react-router-dom";


export const HomeStyle = styled.h2`
  font-family: cursive;
  text-align: center;
  font-size: 300%;
`;

export const Discription = styled.p`
  font-family: cursive;
  margin-left: 50px;
  margin-right: 50px;
  font-size:150%;
   
  &.Name{
    font-weight: bold;
    background-color: #eae3c8;
  }
  &.data{
  margin-left: 3%;
  font-size: 150%;
   padding-top:-3%;
}
`;
export const HomeImg = styled.img`
  width: 400px;
  height: 400px;
  margin-left: 430px;
  border-radius: 2%;
 
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  justify-content: space-between;
  border-radius: 30%;
  border: solid 3px #c2b092

`;

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-bottom: 3%;
  margin-left: 3%;
  
  &.title{
    margin-left: 3%;
    font-size: 200%;
    background-color: #cfc5a5;
    padding-top: 1%;
font-weight:bold;
max-width: width auto;;
max-height: auto;
padding-bottom: 0;
padding-top: 0;
margin-bottom: 3%;
  }
`;

export const SearchBarStyle = styled.input`
margin-left: 2%;
margin-bottom:3%;
width: 25%;
`

export const DesImg = styled.img`
  width: 300px;
  height: 300px;
border-radius: 15%;
margin-left: 40%;
margin-top:3%

`;

export const Logo = styled(Link)`
  text-decoration: unset;
  font-family: cursive;
  color: #334443;
  display: flex;
  justify-content:flex-end;
  padding-right: 25px;
  &.Trip{
    padding-top: 2%;
  }
  img {
    width: 5rem;
    justify-content: right;

  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eae3c8;
`;

export const Button = styled.button`
  background: ${(props) => props.color ?? "red"};
  color: ${(props) => props.textColor ?? "black"};
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  justify-content:center;
  margin-left: 40%;
  &:hover {
    box-shadow: 0 9px #aaa;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
export const Not = styled.h2`
margin-left: 20%;
font-size:500%
`
