const getNumber = function(max=100, min=0, floatCnt=0){
    let number = +(Math.random() * (max - min) + min).toFixed(floatCnt)
    return number > min ? number - 1 : number 
}
const getRGB = function(alpha = 1, min = 0, max = 256){
    return `rgba(${getNumber(max, min)},${getNumber(max, min)},${getNumber(max, min)},${alpha})`
}
module.exports = {getNumber, getRGB}