/*
1. Cheese Burger is 4.20 
2. Chicken Sandwich is 5.10
3. Fries are 2.25
4. Drink 1.25
5. Combo Meal One Cheese Burger With Fries and a Drink 6.45
6. Combo Meal Two is Chicken Sandwich With Fries and a Drink 7.35
*/
function comboMealCreator(
    cheeseBurger: boolean, 
    chickenSandwich: boolean, 
    fries: boolean, 
    drink: boolean) {
        if(cheeseBurger) return '$ 4.20'; 
        if (chickenSandwich) return '$ 5.10'; 
        if (fries) return '$ 2.25'; 
        if (drink) return '$ 1.25'; 
        if (cheeseBurger && fries && drink) return '$ 6.45'; 
        if (chickenSandwich && fries && drink) return '$ 7.35';
        return 0 
    }; 
    console.log('this should be a cheese burger', comboMealCreator(true, false, false, false)); 
    console.log('this should be a chicken sandwich', comboMealCreator(false, true, false, false)); 
    console.log('this should be the first combo meal', comboMealCreator(true, false, true, true)); 
    console.log('this should be the second combo meal', comboMealCreator(false, true, true, true)); 

    function takeOrder(ticket: string): string {
        if(ticket == "Combo Meal One") {
            return "$6.45"; 
        }else if(ticket == "Combo Meal Two") {
            return "$7.35"; 
        }else if (ticket == "Combo Meal Three") {
            return "$5.45"; 
        } else {
            return `We do not carry ${ticket}`; 
        }; 
    }; 

    console.log(takeOrder("Combo Meal One")); 
    console.log(takeOrder("Combo Meal Two")); 
    console.log(takeOrder("Combo Meal Three")); 
    console.log(takeOrder("Combo Meal Four")); 
