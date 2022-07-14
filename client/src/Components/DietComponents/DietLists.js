import React, { useState } from 'react'
import styled from 'styled-components'

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ListItem = styled.ul`
margin-top: 1rem;

ol{
  margin-left: 1rem;
}

`

const SubHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  svg{
    background-color: black;
    fill: white;
    border-radius: 50%;
    margin-right: 1rem;
    transition: all 0.2s ease;

    &:hover{
      transform: scale(1.1);
    }
    
    &:active{
      transform: scale(0.9);
    }
  }

  h3{
    font-weight: 600;
    margin-bottom: 0.7rem;
    font-style: italic;
  }
  
`

const List = styled.ul`
display: ${(props) => (props.clicked ? "block" : "none")};
list-style-type: circle;
margin-left: 1rem;

li{
  margin-left: 1rem;
  margin-bottom: 0.4rem;
  font-weight: 400;
}
`;


const DietLists = ({ subheading, list}) => {
    const [collapse, setCollapse] = useState(false)
  return (
    <ListItem>
    <SubHeading onClick={() => setCollapse(!collapse)}>
    <h3>{subheading}</h3>
    {collapse ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
    </SubHeading>
    <List clicked={collapse} >
    {
        list.map(( item, index ) => {
            return (
                <li key={index}>{item}</li>
            )
        })
    }
    </List>
    </ListItem>
  )
}

export default DietLists