function gameGiver(game: string): any {
    if(game == 'Red Dead Redemption 2'){
        return 59.99; 
    } else if (game == 'Mario Party') {
        return 49.99; 
    } else if (game == 'Forza 5') {
        return 49.99; 
    } else if (game == 'Star Dew Valley') {
        return 19.99; 
    } else {
        return `We do not have ${game}`; 
    }; 
}; 

it('should give us the price for the first game', () => {
    expect(gameGiver('Red Dead Redemption 2')).toBe(59.99); 
}); 
it('should give us the price for the second game', () => {
    expect(gameGiver('Mario Party')).toBe(49.99); 
}); 
it('should price the third game', () => {
    expect(gameGiver('Forza 5')).toBe(49.99); 
}); 
it('should price the fourth game', () => {
    expect(gameGiver('Star Dew Valley')).toBe(19.99); 
});
it('should not price this game', () => {
    expect(gameGiver('Mario Kart')).toBe('We do not have Mario Kart'); 
}); 

function movieDiscounts(movieMeb: boolean, senior: boolean, milOrEmt: boolean){
    if(movieMeb && senior && milOrEmt) return 0.40; 
    if((movieMeb && senior) || (movieMeb && milOrEmt)) return 0.35;
    if(senior || milOrEmt) return 0.15; 
    if(movieMeb) return 0.10; 
    return 0; 
}

it('should give the all discounts', () => {
    expect(movieDiscounts(true,true,true)).toBe(0.40); 
    expect(movieDiscounts(true,true,false)).toBe(0.35); 
    expect(movieDiscounts(true, false, true)).toBe(0.35); 
    expect(movieDiscounts(false,true,false)).toBe(0.15); 
    expect(movieDiscounts(false,false,true)).toBe(0.15); 
    expect(movieDiscounts(true,false,false)).toBe(0.10); 
    expect(movieDiscounts(false,false,false)).toBe(0); 
})