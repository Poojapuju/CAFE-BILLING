let teacount = 0;
        let coffeecount = 0;
        let milkcount = 0;
        let lemoncount = 0;


        let tearate = 12;
        let coffeerate = 10;
        let milkrate = 15;
        let lemonjuicerate = 20;

        function Add(){
            const selecteddrink = document.querySelector('input[name = "drink"]:checked');
            if(selecteddrink){
                const drinktype = selecteddrink.id;
                if(drinktype === 'tea'){
                    teacount++;
                    document.getElementById('teacount').textContent = teacount;
                }else if(drinktype ==='coffee'){
                    coffeecount++;
                    document.getElementById('coffeecount').textContent = coffeecount;
                }else if(drinktype === 'milk'){
                    milkcount++;
                    document.getElementById('milkcount').textContent = milkcount; 
                 }else if(drinktype === 'lemon'){
                    lemoncount++;
                    document.getElementById('lemoncount').textContent = lemoncount;
        }
    }
}
    function Total(){
        let total = (teacount *tearate)+(coffeecount*coffeerate)+(milkcount*milkrate)+(lemoncount*lemonjuicerate);
        document.getElementById('bill').textContent="Total :"+ "₹" +total;

    }