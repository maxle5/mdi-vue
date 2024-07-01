using System.Xml;

namespace Generator;

public class Icon
{
    public required string Id { get; init; }
    public required string BaseIconId { get; init; }
    public required string Name { get; init; }
    public required string Codepoint { get; init; }
    public required string[] Aliases { get; init; }
    public required string[] Tags { get; init; }
    public required string[] Styles { get; init; }
    public required string Author { get; init; }
    public required string Version { get; init; }
    public required bool Deprecated { get; init; }

    public string CompileVueComponent(string svgContent)
    {
        // extract the path from the SVG content via xml parsing
        var xml = new XmlDocument();
        xml.LoadXml(svgContent);
        var path = xml.GetElementsByTagName("path")[0]?.Attributes?["d"]?.Value ?? string.Empty;

        // format template
        return $$"""
        <template>
            <svg :width="size" :height="size" :viewBox="viewbox">
                <path d="{{ path }}" style="fill: currentColor" />
            </svg>
        </template>

        <script lang="ts">
        import { defineComponent } from 'vue';

        export default defineComponent({
            name: "{{ StringFormatters.KebabToPascalCase(Name) }}",
            props: {
                size: { 
                    type: Number, 
                    default: 24 
                },
                viewbox: {
                    type: String, 
                    default: "0 0 24 24" 
                },
            },
        })
        </script>
        """;
    }
}