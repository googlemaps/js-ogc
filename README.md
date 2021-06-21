# OGC Plugin for Google Maps

[![npm](https://img.shields.io/npm/v/@googlemaps/ogc)](https://www.npmjs.com/package/@googlemaps/ogc)
![Build](https://github.com/googlemaps/js-ogc/workflows/Build/badge.svg)
![Release](https://github.com/googlemaps/js-ogc/workflows/Release/badge.svg)
[![codecov](https://codecov.io/gh/googlemaps/js-ogc/branch/main/graph/badge.svg)](https://codecov.io/gh/googlemaps/js-ogc)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-ogc?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)
[![Discord](https://img.shields.io/discord/676948200904589322?color=6A7EC2&logo=discord&logoColor=ffffff)](https://discord.gg/jRteCzP)

## Description

Add a WmsMapType to Google Maps.

> **Note**: This package was previously located at https://github.com/googlemaps/v3-utility-library.

## NPM

Available via NPM as the package `@googlemaps/ogc`.

``` shell
npm i @googlemaps/ogc
```

## Documentation

The reference documentation can be found at this [link](https://googlemaps.github.io/js-ogc).

## Examples

See the [WMS](https://googlemaps.github.io/js-ogc/examples/wmslayer.html) example in action.


``` javascript
import { WmsMapType } from '@googlemaps/ogc';

map = new google.maps.Map(document.getElementById("map"), mapOptions);

landCoverMapType = WmsMapType({
    url: "https://www.mrlc.gov/geoserver/NLCD_Land_Cover/wms?",
    layers: "mrlc_display:NLCD_2016_Land_Cover_L48",
    name: "Land Cover",
    alt: "NLCD_2016_Land_Cover_L48",
    maxZoom: 18
});

map.mapTypes.set("landcover", landCoverMapType);
map.setMapTypeId("landcover");

// alternative as overlay
map.overlayMapTypes.push(landCoverMapType);
```

## Support

This library is community supported. We're comfortable enough with the stability and features of
the library that we want you to build real production applications on it.

If you find a bug, or have a feature suggestion, please [log an issue][issues].

[issues]: https://github.com/googlemaps/js-ogc/issues
