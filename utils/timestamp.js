


const format = (date) => {
  return  `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`
}

module.exports = format