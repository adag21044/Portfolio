export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    iconUrl: string; 
    isWide: boolean; 
    isHigh: boolean; 
    accentColor: string; 
    color: string; // Now explicitly typed as string
    imageUrl: string; 

    constructor(id: string, name: string, iconUrl: string, html: string, accentColor = "#000000", isHigh = false, isWide = false, imageUrl = "") {
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
        this.color = accentColor; // color will take the same value as accentColor
        this.imageUrl = imageUrl; // initialize imageUrl
    }
}