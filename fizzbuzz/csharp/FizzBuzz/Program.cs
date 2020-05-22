using System;

namespace FizzBuzz
{
    class Program
    {
        static void Main(string[] args)
        {
            Fizz_Buzz();
        }
        public static void Fizz_Buzz(){
            for (int i = 1; i <= 100; i+= 1)
            {
                if(i%3 == 0){
                    Console.WriteLine($"{i} fizz");
                }else if(i%5 == 0){
                    Console.WriteLine($"{i} buzz");
                }else{
                    Console.WriteLine(i);
                }
            }
        }
    }    
}
