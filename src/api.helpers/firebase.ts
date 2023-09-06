import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAOY4VsBgIc_naNIGm46JhVMhs7gVsa0FE",
    authDomain: "shutterfly-6f210.firebaseapp.com",
    projectId: "shutterfly-6f210",
    storageBucket: "shutterfly-6f210.appspot.com",
    messagingSenderId: "949649857818",
    appId: "1:949649857818:web:0361621c8bc477c95ca0a3",
    measurementId: "G-6RHLFH61PH"
};

const firebase = initializeApp(firebaseConfig);

const dbService  = {
    saveArtist: async (employeeId: string, artistName: string): Promise<any> => {
        var database = firebase.options


        // var dataRef = database.ref("path/to/your/data");
        //
        // dataRef.set("", function(error) {
        //     if (error) {
        //         console.log("Data could not be saved: " + error);
        //     } else {
        //         console.log("Data saved successfully.");
        //     }
        // });

        return null;
    }
}

export default  dbService;