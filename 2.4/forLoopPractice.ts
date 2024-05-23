// Making a list to loop through 
var videoGames: Array<string> = [
    'Red Dead Redemption 2', 
    "Call of Duty", 
    "Forza 5", 
    "NBA 2K", 
    "Madden 24"
]; 

for(let i = 0; i < videoGames.length; i++) {
    console.log(`Games to play: ${i + 1}: ${videoGames[i]} `); 
}; 

videoGames.forEach((game) => {
    console.log(`You should check out ${game}`); 
}); 