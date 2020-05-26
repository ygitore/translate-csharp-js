using System;
using System.Collections.Generic;

namespace Insults
{
    class Program
    {
        static void Main(string[] args)
        {
            PrintOnScreen();
        }
        public static String[] Insults(){
            String[] insults = new String[]{
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
             };
             return insults;
        }
        public static void PrintOnScreen(){
            var indexes = new List<int>(){};
            int count = 0;
            while (count < 3) {
                int candidate = getRandomInt(0, Insults().Length - 1);
                if(indexes.Contains(candidate)){

                }
                count++;
            }

            for (int i=0; i< 3; i++) {
                int index = indexes[i];
                Console.WriteLine(Insults()[index]);
            }
        }
        public static int getRandomInt(int min, int max){
            Random rand = new Random();
            return rand.Next(min, max);
        }
    }
}
