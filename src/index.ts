import serverApi from "./api.helpers/youtube";
import dbService from "./api.helpers/firebase";

console.log("*START*")

async function getArtist(artist_name: string) {
    console.log(await serverApi.getArtist(artist_name));
}

getArtist("madonna").then(r => console.log("*FINISH*"));

// function addArtist(employee_id : string, artists: string){
//     dbService.saveArtist(employee_id, artists);
// }