import { useEffect, useState } from "react"

export function App() {

  const [number, setNumber] = useState(5)

  const [secondsLeft, setSecondsLeft] = useState(number)

  const handleChange = (v) => {
    setNumber(v)
    setSecondsLeft(v)
  }

  useEffect(() => {
    const timer = setInterval(() => {
        setSecondsLeft(v => {
          if (v <= 1) {
            clearInterval(timer)
            return 0
          } else {
            return v - 1
          }
        })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [number])

  return <div className="flex flex-col justify-center items-center">
    <label className="text-lg mb-3 font-semibold" htmlFor="nb">Rentrer un nouveau nombre de compte à rebour :</label>
    <input className="border-2 rounded-md outline-offset-2 outline-2 py-2 px-3 w-52 mb-3" name="nb" type="number" min={0} value={number} onChange={e => handleChange(e.target.value)} />
    {secondsLeft}
  </div>

}


export default App

// element de champ texte avec un num de 5 par default avec un timer