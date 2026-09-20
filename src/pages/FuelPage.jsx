import { useState } from 'react'

export function FuelPage() {
  const [fuelPrice, setFuelPrice] = useState('')
  const [priceAmount, setPriceAmount] = useState('')
  const [literAmount, setLiterAmount] = useState('')
  const [kmPerLiter, setKmPerLiter] = useState('')
  const [selector, setSelector] = useState('Km/L')
  const [amountMode, setAmountMode] = useState('priceAmount')
  const [result, setResult] = useState('')

  const inputClassName =
    'min-w-0 w-full rounded-md border border-line bg-white px-3 py-2 text-ink outline-none placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-orange-100 sm:max-w-xs'
  const labelClassName =
    'text-sm font-semibold text-ink sm:min-w-40 sm:text-right'
  const selectClassName = 'rounded-md border border-line bg-white px-3 py-2 text-ink'
  const fieldClassName =
    'mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-3'

  const calculate = () => {
    const fuelPriceNum = Number(fuelPrice)
    const priceAmountNum = Number(priceAmount)
    const literAmountNum = Number(literAmount)
    const kmPerLiterNum =
      selector === 'Km/L' ? Number(kmPerLiter) : 100 / Number(kmPerLiter)

    if (
      !Number.isNaN(fuelPriceNum) &&
      !Number.isNaN(priceAmountNum) &&
      !Number.isNaN(kmPerLiterNum)
    ) {
      const liters = priceAmountNum / fuelPriceNum
      const distance = liters * kmPerLiterNum

      setResult(
        `ราคาน้ำมัน ${fuelPriceNum} บาท/ลิตร\nราคาที่ต้องการเติม ${priceAmountNum} บาท\nจะเติมได้ทั้งหมด ${liters.toFixed(3)} ลิตร\nจะได้ระยะทางทั้งหมด ${distance.toFixed(3)} กิโลเมตร`,
      )
      return
    }

    if (!Number.isNaN(fuelPriceNum) && !Number.isNaN(priceAmountNum)) {
      const liters = priceAmountNum / fuelPriceNum

      setResult(
        `ราคาน้ำมัน ${fuelPriceNum} บาท/ลิตร\nราคาที่ต้องการเติม ${priceAmountNum} บาท\nจะเติมได้ทั้งหมด ${liters.toFixed(3)} ลิตร`,
      )
      return
    }

    if (
      !Number.isNaN(fuelPriceNum) &&
      !Number.isNaN(literAmountNum) &&
      !Number.isNaN(kmPerLiterNum)
    ) {
      const totalPrice = literAmountNum * fuelPriceNum

      setResult(
        `ราคาน้ำมัน ${fuelPriceNum} บาท/ลิตร\nจำนวนลิตรที่ต้องการเติม ${literAmountNum} ลิตร\nจะต้องเติมเป็นจำนวนเงิน ${totalPrice.toFixed(3)} บาท`,
      )
      return
    }

    if (!Number.isNaN(fuelPriceNum) && !Number.isNaN(literAmountNum)) {
      const totalPrice = literAmountNum * fuelPriceNum

      setResult(
        `ราคาน้ำมัน ${fuelPriceNum} บาท/ลิตร\nจำนวนลิตรที่ต้องการเติม ${literAmountNum} ลิตร\nจะต้องเติมเป็นจำนวนเงิน ${totalPrice.toFixed(3)} บาท`,
      )
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
    <main
      className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-5 py-12 sm:px-8"
      data-testid="fuel-page"
    >
      <div
        className="w-full max-w-3xl rounded-xl border border-line/70 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
        data-testid="fuel-card"
      >
        <div className={fieldClassName} data-testid="fuel-price-field">
          <label
            className={labelClassName}
            htmlFor="fuel-price"
            data-testid="fuel-price-label"
          >
            ราคาน้ำมัน :
          </label>
          <input
            className={inputClassName}
            id="fuel-price"
            value={fuelPrice}
            onChange={(event) => setFuelPrice(event.target.value)}
            placeholder="ราคาน้ำมันปัจจุบัน"
            data-testid="fuel-price-input"
          />
        </div>

        <div className={fieldClassName} data-testid="fuel-amount-field">
          {amountMode === 'priceAmount' ? (
            <>
              <label
                className={labelClassName}
                htmlFor="fuel-price-amount"
                data-testid="fuel-price-amount-label"
              >
                ราคาที่ต้องการเติม :
              </label>
              <input
                className={inputClassName}
                id="fuel-price-amount"
                value={priceAmount}
                onChange={(event) => setPriceAmount(event.target.value)}
                placeholder="ราคาที่ต้องการเติม"
                data-testid="fuel-price-amount-input"
              />
            </>
          ) : (
            <>
              <label
                className={labelClassName}
                htmlFor="fuel-liter-amount"
                data-testid="fuel-liter-amount-label"
              >
                จำนวนลิตรที่ต้องการเติม :
              </label>
              <input
                className={inputClassName}
                id="fuel-liter-amount"
                value={literAmount}
                onChange={(event) => setLiterAmount(event.target.value)}
                placeholder="จำนวนลิตรที่ต้องการเติม"
                data-testid="fuel-liter-amount-input"
              />
            </>
          )}

          <select
            className={selectClassName}
            value={amountMode}
            onChange={(event) => handleModeChange(event.target.value)}
            aria-label="Amount mode"
            data-testid="fuel-amount-mode-select"
          >
            <option value="priceAmount" data-testid="fuel-amount-mode-price-option">
              ราคาที่ต้องการเติม
            </option>
            <option value="literAmount" data-testid="fuel-amount-mode-liter-option">
              จำนวนลิตรที่ต้องการเติม
            </option>
          </select>
        </div>

        <div className={fieldClassName} data-testid="fuel-efficiency-field">
          <label
            className={labelClassName}
            htmlFor="fuel-efficiency"
            data-testid="fuel-efficiency-label"
          >
            อัตราสิ้นเปลืองน้ำมัน :
          </label>
          <input
            className={inputClassName}
            id="fuel-efficiency"
            value={kmPerLiter}
            onChange={(event) => setKmPerLiter(event.target.value)}
            placeholder="อัตราสิ้นเปลืองน้ำมัน"
            data-testid="fuel-efficiency-input"
          />
          <select
            className={selectClassName}
            value={selector}
            onChange={(event) => setSelector(event.target.value)}
            aria-label="Fuel efficiency unit"
            data-testid="fuel-efficiency-unit-select"
          >
            <option value="Km/L" data-testid="fuel-efficiency-km-option">
              Km/L
            </option>
            <option value="L/100Km" data-testid="fuel-efficiency-liter-option">
              L/100Km
            </option>
          </select>
        </div>

        <div className="mt-7 flex justify-center gap-3" data-testid="fuel-actions">
          <button
            type="button"
            className="cursor-pointer rounded-md border border-ink bg-ink px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-700"
            onClick={calculate}
            data-testid="fuel-calculate-button"
          >
            Calculate
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink"
            onClick={clearInputs}
            data-testid="fuel-clear-button"
          >
            Clear
          </button>
        </div>

        {result && (
          <p
            className="mt-6 whitespace-pre-line text-center text-lg font-medium leading-loose text-ink"
            data-testid="fuel-result"
          >
            {result}
          </p>
        )}
      </div>
    </main>
  )
}
