const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var xml;
let libraryNS = "http://www.opengis.net/kml/2.2";

async function loadXml() {
  if (xml == undefined) {
    let response = await fetch(
      "http://localhost:8889/library-data.kml",
      {
        method: "get",
        headers: {
          "Content-Type": "application/xml"
        }
      }
    );
    //convert XML string to XML DOM document
    data = new JSDOM(await response.text(), { contentType: "application/xml" });
    //console.log(data);
    xml = data.window.document; //set the xml to the XML DOM document which we can query using DOM methods
  }
  return xml;
}
async function loadLibraries() {
  xmlDocument = await loadXml();
  return xmlDocument.querySelectorAll("Placemark");
}
async function getLibraryById(id) {
  xmlDocument = await loadXml();
  let libraryID = xmlDocument.getElementById(id)
  

  // only expecting one result so we just need to run iterateNext() to get the first result
  return libraryID;
}

module.exports = {
  loadLibraries,
  getLibraryById
};