using System.Diagnostics.Contracts;
using System.Text;

namespace Generator;

public static class StringFormatters
{
    public static string KebabToPascalCase(string kebabCase)
    {
        var sb = new StringBuilder();
        var capitalizeNext = true; // Start with true to capitalize the first letter

        for (var i = 0; i < kebabCase.Length; i++)
        {
            var currentChar = kebabCase[i];

            if (currentChar == '-')
            {
                capitalizeNext = true;
            }
            else
            {
                if (capitalizeNext)
                {
                    sb.Append(char.ToUpper(currentChar));
                    capitalizeNext = false;
                }
                else
                {
                    sb.Append(currentChar);
                }
            }
        }

        return sb.ToString();
    }
}