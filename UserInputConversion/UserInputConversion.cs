using System;

namespace UserInputConversion
{
	class ToInt32Conversion
	{
		static void Main(string[]args)
		{
			int num;
			num = Convert.ToInt32(Console.ReadLine());
			Console.ReadKey();
		}
		//add a throw exception for if user input is improper format.
	}
}