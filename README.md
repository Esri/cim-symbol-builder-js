
# cim-symbol-builder-js
Use the CIM Symbol Builder to explore different combinations of symbol layers and their properties to create your desired CIMSymbol in the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/).

[View it live](https://esri.github.io/cim-symbol-builder-js/)

![App](https://raw.githubusercontent.com/Esri/cim-symbol-builder-js/master/cim-symbol-builder-js.png)

## Features
* Learn how to create CIM symbols in the ArcGIS API for JavaScript
* Modify the properties of symbol layers 
* Modify your own custom symbols by importing the symbol JSON
* When you are done creating your symbol, copy the JSON and use it in your own ArcGIS API for JavaScript application!

## Instructions

Get started by clicking the `Add symbol layer` button to add a symbol layer to your CIMSymbol. You can then choose from a predefined list of icons and shapes, or import your own symbol layer JSON. After selecting your first symbol layer, you can change its properties (size, anchor point, rotation, etc.) by clicking on the symbol layer type in the right panel. Use the expand arrow to the right of the symbol layer to discover more properties to customize.

You can add as many symbol layers as you like, and can reorder them by clicking on the symbol layer and dragging it to the desired location in the list.

When you are ready to see what the symbol looks like on the layer in the map, click `Apply to feature layer`. If you are satisfied with how your symbol looks, click `Get SymbolJSON` to convert your symbol to JSON. You can use this JSON to bring the symbol you created into your application on the `CIMSymbol.data.symbol` property.

## Requirements

* Web browser with access to the Internet

## Resources

The [CIMSymbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-CIMSymbol.html) API reference page provides some example symbols and more information about the properties of a symbol. The [CIM specification](https://github.com/Esri/cim-spec) provides more detailed information on specific properties for each symbol layer type.

To see the CIM symbols in action, check out the following sample applications:
- [Intro to CIMSymbol](https://developers.arcgis.com/javascript/latest/sample-code/cim-symbols/index.html)
- [CIMSymbol lines and polygons](https://developers.arcgis.com/javascript/latest/sample-code/cim-lines-and-polygons/index.html)
- [Wurman dots](https://developers.arcgis.com/javascript/latest/sample-code/cim-primitive-overrides/index.html)
- [Arrows along a line](https://developers.arcgis.com/javascript/latest/sample-code/cim-line-arrows/index.html)

The following ArcGIS Blog posts also contain useful information about CIM symbols and some great sample applications:

- [Create points, lines, and polygons using CIMSymbols](https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/create-points-lines-and-polygons-using-cimsymbols/)
- [Visualize electoral swing using composite symbols](https://www.esri.com/arcgis-blog/products/js-api-arcgis/mapping/visualize-electoral-swing-using-composite-symbols/#how-the-map-is-made)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing
Copyright 2020 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.githubusercontent.com/annelfitz/cim-symbol-builder-js/master/license.txt) file.
