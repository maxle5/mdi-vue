using System.Net.Http.Json;

namespace Generator;

internal class Program
{
    private const string _metaUrl = "https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/meta.json";
    private const string _svgUrl = "https://raw.githubusercontent.com/Templarian/MaterialDesign-SVG/master/svg/";

    private static async Task Main(string[] args)
    {
        // retrieve the manifest from the repository
        using var client = new HttpClient();
        var manifest = await client.GetFromJsonAsync<Icon[]>(_metaUrl) ?? [];
        var libraryPath = GetLibraryPath(new DirectoryInfo(AppDomain.CurrentDomain.BaseDirectory));

        // process each icon
        await Parallel.ForEachAsync(manifest, async (icon, cancellationToken) => 
        {
            var svgContent = await client.GetStringAsync(_svgUrl + icon.Name + ".svg", cancellationToken);
            var vueContent = icon.CompileVueComponent(svgContent);
            var vueFile = Path.Combine(libraryPath, "src", "components", StringFormatters.KebabToPascalCase(icon.Name) + ".vue");

            using var writer = new StreamWriter(vueFile);
            await writer.WriteAsync(vueContent);
        });

        // generate the index file
        var imports = string.Join(Environment.NewLine, manifest.Select(icon => {
            var fileName = StringFormatters.KebabToPascalCase(icon.Name);
            return $"import {fileName} from './components/{fileName}.vue';";;
        }));
        var exports = string.Join(Environment.NewLine, manifest.Select(icon => $"\t{StringFormatters.KebabToPascalCase(icon.Name)},"));
        using var writer = new StreamWriter(Path.Combine(libraryPath, "src", "main.ts"));
        await writer.WriteLineAsync(imports);
        writer.WriteLine();
        writer.WriteLine("export {");
        await writer.WriteLineAsync(exports[..exports.LastIndexOf(',')]);
        writer.WriteLine("};");
    }

    private static string GetLibraryPath(DirectoryInfo directory)
    {
        if (directory.GetFiles("*.csproj").Length != 0)
        {
            return Path.Combine(directory.Parent!.FullName, "lib");
        }

        return GetLibraryPath(directory.Parent ?? throw new IndexOutOfRangeException("Could not find library path."));
    }
}