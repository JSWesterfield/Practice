using System;

namespace TypeConversionApplication
{
	// explicit conversion: explicitly done by users
	// using pre-defined functions.
	class ExplicitConversion 
	{
		static void Main(string[]args)
		{
			double d = 5673.74;
			int i;
			
			// cast double to int
			i = (int)d;
			Console.WriteLine(i);
			Console.ReadKey();
			
		}
	} //This is my comment exmaple
}
		