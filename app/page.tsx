import Image from 'next/image'
import Card from './ui/card'

export default function Home() {
  return (
    <main className="">
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: '1fr 1fr',
        height: '100dvh',
        width: '100dvw',
        border: '1px solid black',
        padding: '2.5dvmin',
        gap: '2.5dvmin',
        background: '#D3D3D3',
      }}
    >
      <Card
        style={{
          background: '#202020',
          color: 'white',
          fontSize: '7dvmin',
          gridRow: '1 / -1',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales.
      </Card>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr',
          gridAutoFlow: 'column',
          gridAutoColumns: 'minmax(calc(33% - 1.66dvmin ), 1fr)',
          gap: '3dvmin',
          height: '100%',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollSnapAlign: 'center',
          scrollBehavior: 'smooth',
          gridRow: '2 / -2',
        }}
      >
        {Array(16)
          .fill(1)
          .map((_, i) => (
            <Card
              key={i}
              style={{
                aspectRatio: '1',
                fontSize: 'dvmin',
                scrollSnapAlign: 'center',
                background: '#ECECEC',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              sodales.
            </Card>
          ))}
      </div>
    </div>
    </main>
  )
}
