import React from 'react';
import LayoutIntro from '../intro/LayoutIntro';

interface PartyIntroProps extends React.HTMLProps<HTMLDivElement> {
  title: string,
  children: any
}

export default function PartyIntro({ title, children }: PartyIntroProps) {
  return (
    <LayoutIntro title={title}>
      {children}
    </LayoutIntro>
  )
}
