export const getRandomNumber=(min, max)=>{
    const maxMin = max-min;
    const maxMinRandom = Math.random()* maxMin;
    return min + Math.round(maxMinRandom);
}