import React, { useRef, useEffect } from 'react'
import baffle from 'baffle'

export default function BaffleName({ tic, setTic }) {

    const dynamicText = useRef()
    
    useEffect(() => {

        const myWords = [
            'design things',
            'think creatively',
            'love to innovate',
            'solve problems'
        ]

        const baffler = baffle(dynamicText.current)
        baffler.options.characters = ("ᾏστυφχΓΔϊϋόͶώ/<>?")
        baffler.text(currentText => myWords[tic])
        baffler.start()
        baffler.reveal(1000, 500)

        const interval = setInterval(() => {
            if (tic === 3) {// eslint-disable-next-line
                tic = 0
                setTic(0)
            } else {
                tic++
                setTic(tic)
            }
            baffler.text(currentText => myWords[tic])
            baffler.start()
            baffler.reveal(1000, 500)

        }, 4000)
        return () => clearInterval(interval)
    }, [tic])

    return (
        <span className='bg-mySecondary bg-gradient-to-br text-transparent from-myPrimary via-myPrimary bg-clip-text' ref={dynamicText} />
    )
}
