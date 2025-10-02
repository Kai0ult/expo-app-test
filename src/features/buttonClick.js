export function click(type, count, setCount) {
  if (type === "mais") {
    const newValue = count + 1
    setCount(newValue)
    console.log("Contador:", newValue)
  } else if (type === "menos") {
    if (count > 0) { 
      const newValue = count - 1
      setCount(newValue)
      console.log("Contador:", newValue)
    } else {
      alert("O contador nao pode ser negativo!")
    }
  }
}