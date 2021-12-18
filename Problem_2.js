function fiboEvenSum(n) {

    var sum = 0;

    var term = [0, 1, 1];

    for(var i = 3; term[i] < n; i++)
    {
        if(term[i] == n)
        {
            return sum;
        }
        else if(i == 0 || i == 1 || i == 2)
        {
            continue;
        }
        else
        {
           term[i] = term[i - 1] + term[i - 2] 

           if((term[i] % 2) == 0)
           {
               sum += term[i];
           }
        }
    }  
    return sum;
}

console.log(fiboEvenSum(7));

