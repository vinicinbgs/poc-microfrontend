interface Window { 
    uiUrl: any; 
}

// You can write your own logic here to determine the actual url
window.uiUrl = "http://localhost:3010" || ""

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
