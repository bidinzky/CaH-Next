import React from 'react';
import { JSX, forwardRef } from 'react';

type CardProperties = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default forwardRef<HTMLDivElement, CardProperties>(function Card(
  { ...props }: CardProperties,
  ref
) {
  return (
    <div
      ref={ref}
      {...props}
      style={{
        boxShadow: '5px 5px 2px 0px rgba(0,0,0,0.74)',
        borderRadius: '2.5cqmin',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textWrap: 'pretty',
        padding: '2.5cqmin',
        textAlign: 'center',

        ...((props.style as any) ?? {}),
      }}
    ></div>
  );
});
