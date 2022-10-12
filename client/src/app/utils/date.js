export const formatTime = (time) => {
  if (!time) return ''
  let formatedTime = ''
  const today = new Date()
  const date = new Date(time)
  if (today.getDay() - date.getDay() === 0) {
    const newFormat = date.toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    const dayTime = newFormat.split(' ')[1].split(':')[0] < 12 ? ' AM' : ' PM'
    formatedTime = newFormat.split(' ')[1] + dayTime
  } else {
    const newFormat = date.toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    formatedTime = newFormat.split(' ')[0].slice(0, -1)
  }
  return formatedTime
}
