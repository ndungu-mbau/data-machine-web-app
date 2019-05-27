import React from 'react';
import styled from 'styled-components';

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 32px;
  width: 90%;
  margin: 8px;
  background: linear-gradient(-90deg, #25253733 0%, #f8f8f855 50%, #25253733 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  border-radius: 8px;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const SkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 16px;

  &::before {
    content: '\00a0';
  }
`;

export const SkeletonLineLong = styled(SkeletonLine)`
  height: 96px;
`;

export const SkeletonLineShort = styled(SkeletonLine)`
  width: ${props => props.width || '50%'};
`;

export const SkeletonLineHigh = styled(SkeletonLine)`
  width: 60%;
  height: 144px;
`;

export const SkeletonLineCircle = styled(SkeletonLine)`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const QuestionLayout = () => {
  return (
    <div
      style={{
        borderRadius: '16px',
        backgroundColor: '#fff',
      }}
    >
      <SkeletonLineLong />
      <SkeletonLineHigh />
      <SkeletonLineShort />
      <SkeletonLineCircle />
      <SkeletonLineCircle />
    </div>
  );
};
