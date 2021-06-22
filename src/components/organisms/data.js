function* range(start, end, step) {
  while (start <= end) {
    yield start
    start += step
  }
}

function convertToMMSS(seconds, withParentheses = true, hour = false) {
  let dateString = new Date(seconds * 1000).toISOString()
  let newTime = dateString.substr(14, 5)

  // If the time is over an hour we need to also show the "HH:" part of the datetime string.
  if (hour) newTime = dateString.substr(11, 8)

  // Add parentheses if set to true (default)
  if (withParentheses) newTime += ` (${seconds} seconden)`

  return newTime
}

const wattages = Array.from(range(300, 1600, 25)).map((wattage) => {
  return {
    value: wattage,
    label: `${wattage} watt`,
  }
})

const times = Array.from(range(30, 900, 30)).map((seconds) => {
  return {
    value: seconds,
    label: convertToMMSS(seconds),
  }
})

export { times, wattages, convertToMMSS }
