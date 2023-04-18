const day = document.querySelectorAll('days')
const hour = document.querySelectorAll('hours')
const minute = document.querySelectorAll('minutes')
const second = document.querySelectorAll('seconds')

const currentYear = new Date().getFullYear()

const newDate = new Date('May 17 2023 00:00:00')

function updateDate () {
    const currentTime = new Date()
    const dif = newDate - currentTime

    const d = Math.floor(dif / 1000 / 60 / 60 / 24)
    const h = Math.floor(dif / 1000 / 60 / 60) % 24
    const m = Math.floor(dif / 1000 / 60) % 60
    const s = Math.floor(dif / 1000) % 60

    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s

}

setInterval(updateDate, 1000)