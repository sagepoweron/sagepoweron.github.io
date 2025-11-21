const buildingImages =
[
    "../images/farm/building.gif",
    "../images/farm/buildingWithCursor.gif"
];

const featuresImages =
[
    "../images/farm/features/animals.gif",
    "../images/farm/features/crafting.gif",
    "../images/farm/features/map.gif"
];

const timeImages =
[
    "../images/farm/time/time.gif",
    "../images/farm/time/bed.gif",
    "../images/farm/time/end_day.gif"
];
const shoppingImages =
[
    "../images/farm/shopping/buying.gif",
    "../images/farm/shopping/selling.gif"
];
const toolsImages =
[
    "../images/farm/tools/axe.gif",
    "../images/farm/tools/hammer.gif",
    "../images/farm/tools/hoe.gif",
    "../images/farm/tools/shaking.gif"
];

window.addEventListener("load", (event) =>
    {
        LoadImages(buildingImages, "building");
        LoadImages(featuresImages, 'features');
        LoadImages(timeImages, 'time');
        LoadImages(shoppingImages, "shopping");
        LoadImages(toolsImages, "tools");
    }
);