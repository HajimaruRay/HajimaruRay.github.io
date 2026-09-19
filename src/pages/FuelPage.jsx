import { useState } from 'react'

export function FuelPage() {
  const [fuelPrice, setFuelPrice] = useState('')
  const [priceAmount, setPriceAmount] = useState('')
  const [literAmount, setLiterAmount] = useState('')
  const [kmPerLiter, setKmPerLiter] = useState('')
  const [selector, setSelector] = useState('Km/L')
  const [amountMode, setAmountMode] = useState('priceAmount')
  const [result, setResult] = useState('')

  const calculate = () => {
    const fuelPriceNum = Number(fuelPrice)
    const priceAmountNum = Number(priceAmount)
    const literAmountNum = Number(literAmount)
    const kmPerLiterNum = selector === 'Km/L' ? Number(kmPerLiter) : 100 / Number(kmPerLiter)

    if (!Number.isNaN(fuelPriceNum) && !Number.isNaN(priceAmountNum) && !Number.isNaN(kmPerLiterNum)) {
      const liters = priceAmountNum / fuelPriceNum
      const distance = liters * kmPerLiterNum
      setResult(
        `ราคาน้ำมัน ${fuelPriceNum} บาท/ลิตร\nราคาที่ต้องการเติม ${priceAmountNum} บาท\nจะเติมได้ทั้งหมด ${liters.toFixed(3)} ลิตร\nจะได้ระยะทางทั้งหมด ${distance.toFixed(3)} กิโลเมตร`
      )
      return
    }

    if (!Number.isNaN(fuelPriceNum) && !Number.isNaN(priceAmountNum)) {
      const liters = priceAmountNum / fuelPriceNum
      setResult(`ราคาน้ำมัน ${fuelPriceNum} บาท/ลิตร\nราคาที่ต้องการเติม ${priceAmountNum} บาท\nจะเติมได้ทั้งหมด ${liters.toFixed(3)} ลิตร`)
      return
    }

    if (!Number.isNaN(fuelPriceNum) && !Number.isNaN(literAmountNum) && !Number.isNaN(kmPerLiterNum)) {
      const totalPrice = literAmountNum * fuelPriceNum
      setResult(`ราคาน้ำมัน ${fuelPriceNum} บาท/ลิตร\nจำนวนลิตรที่ต้องการเติม ${literAmountNum} ลิตร\nจะต้องเติมเป็นจำนวนเงิน ${totalPrice.toFixed(3)} บาท`)
      return
    }

    if (!Number.isNaN(fuelPriceNum) && !Number.isNaN(literAmountNum)) {
      const totalPrice = literAmountNum * fuelPriceNum
      setResult(`ราคาน้ำมัน ${fuelPriceNum} บาท/ลิตร\nจำนวนลิตรที่ต้องการเติม ${literAmountNum} ลิตร\nจะต้องเติมเป็นจำนวนเงิน ${totalPrice.toFixed(3)} บาท`)
      return
    }

    setResult('Invalid input')
  }

  const clearInputs = () => {
    setFuelPrice('')
    setPriceAmount('')
    setLiterAmount('')
    setKmPerLiter('')
    setResult('')
  }

  const handleModeChange = (value) => {
    setAmountMode(value)
    if (value === 'priceAmount') {
      setLiterAmount('')
    } else {
      setPriceAmount('')
    }
  }

  return (
    <main className="page-shell fuel-page" data-testid="fuel-page">
      <div className="fuel-card" data-testid="fuel-card">
        <div className="fuel-field" data-testid="fuel-price-field">
          <label htmlFor="fuel-price" data-testid="fuel-price-label">ราคาน้ำมัน :</label>
          <input id="fuel-price" value={fuelPrice} onChange={(e) => setFuelPrice(e.target.value)} placeholder="ราคาน้ำมันปัจจุบัน" data-testid="fuel-price-input" />
        </div>

        <div className="fuel-field" data-testid="fuel-amount-field">
          {amountMode === 'priceAmount' ? (
            <>
              <label htmlFor="fuel-price-amount" data-testid="fuel-price-amount-label">ราคาที่ต้องการเติม :</label>
              <input id="fuel-price-amount" value={priceAmount} onChange={(e) => setPriceAmount(e.target.value)} placeholder="ราคาที่ต้องการเติม" data-testid="fuel-price-amount-input" />
            </>
          ) : (
            <>
              <label htmlFor="fuel-liter-amount" data-testid="fuel-liter-amount-label">จำนวนลิตรที่ต้องการเติม :</label>
              <input id="fuel-liter-amount" value={literAmount} onChange={(e) => setLiterAmount(e.target.value)} placeholder="จำนวนลิตรที่ต้องการเติม" data-testid="fuel-liter-amount-input" />
            </>
          )}

          <select value={amountMode} onChange={(e) => handleModeChange(e.target.value)} aria-label="Amount mode" data-testid="fuel-amount-mode-select">
            <option value="priceAmount" data-testid="fuel-amount-mode-price-option">ราคาที่ต้องการเติม</option>
            <option value="literAmount" data-testid="fuel-amount-mode-liter-option">จำนวนลิตรที่ต้องการเติม</option>
          </select>
        </div>

        <div className="fuel-field" data-testid="fuel-efficiency-field">
          <label htmlFor="fuel-efficiency" data-testid="fuel-efficiency-label">อัตราสิ้นเปลืองน้ำมัน :</label>
          <input id="fuel-efficiency" value={kmPerLiter} onChange={(e) => setKmPerLiter(e.target.value)} placeholder="อัตราสิ้นเปลืองน้ำมัน" data-testid="fuel-efficiency-input" />
          <select value={selector} onChange={(e) => setSelector(e.target.value)} aria-label="Fuel efficiency unit" data-testid="fuel-efficiency-unit-select">
            <option value="Km/L" data-testid="fuel-efficiency-km-option">Km/L</option>
            <option value="L/100Km" data-testid="fuel-efficiency-liter-option">L/100Km</option>
          </select>
        </div>

        <div className="fuel-actions" data-testid="fuel-actions">
          <button type="button" className="primary-button" onClick={calculate} data-testid="fuel-calculate-button">Calculate</button>
          <button type="button" className="secondary-button" onClick={clearInputs} data-testid="fuel-clear-button">Clear</button>
        </div>

        {result && <p className="fuel-result" data-testid="fuel-result">{result}</p>}
      </div>
    </main>
  )
}
