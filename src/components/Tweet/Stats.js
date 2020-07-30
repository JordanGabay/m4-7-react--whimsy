import React from 'react';
import { TweetContext } from './TweetContext'
import styled from 'styled-components';


const Stats = () => {
    const {numOfLikes, numOfRetweets} = React.useContext(TweetContext)
    return(
        <>
        <StatsDiv>
            <Span><strong>{numOfRetweets}</strong> Retweets</Span>
            <Span><strong>{numOfLikes}</strong> Likes</Span>
        </StatsDiv>
        </>
    )
}

const StatsDiv = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`

const Span = styled.span`
margin-right: 1rem;
`


export default Stats;