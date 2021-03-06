import React from 'react';
import { TweetContext } from './TweetContext'
import styled from 'styled-components';


const Stats = () => {
    const {numOfLikes, numOfRetweets} = React.useContext(TweetContext)
    return(
        <>
        <StatsDiv>
            <StatsInfo>
            <Span><strong>{numOfRetweets}</strong> Retweets</Span>
            </StatsInfo>
            <StatsInfo>
            <Span><strong>{numOfLikes}</strong> Likes</Span>
            </StatsInfo>
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

const StatsInfo = styled.div`

`


export default Stats;