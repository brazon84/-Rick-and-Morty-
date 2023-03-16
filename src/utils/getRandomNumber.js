export const getRandomNumber=(min, max)=>{
    const maxMin = max-min;
    const maxMinRandom = Math.random()* maxMin;
    console.log(min + Math.round(maxMinRandom))
    return min + Math.round(maxMinRandom);
}