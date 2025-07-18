const farmImages =
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

window.addEventListener("load", (event) =>
    {
        LoadImages(farmImages, "farmImages");
        LoadImages(featuresImages, 'features');
        LoadImages(timeImages, 'time');
    }
);