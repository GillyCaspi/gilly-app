import { google, youtube_v3 } from 'googleapis';
import { Video} from "../module";
//My Project 41275

const API_KEY = "AIzaSyCqmeV_J1axDsIpxwpJAiipU4oG2Jr-Xag" ; //process.env.YOUTUBE_API_KEY;

const youtube = google.youtube({
    version: "v3",
    auth: API_KEY,
});

const serverApi = {
    getArtist: async (artistName: string): Promise<Video[]> => {
        const searchResults = await youtube.search.list({
            part : ['snippet'],
            maxResults: 10,
            q: artistName,
            type: ['video']
        });
        const items = searchResults.data.items as youtube_v3.Schema$SearchResult[];
        const videos = items.map(x => {
            return ({
                id: x.id?.videoId,
                title: x.snippet?.title,
                description: x.snippet?.description,
                publishedAt: x.snippet?.publishedAt
            } as Video)
        });
        return videos;
    }
}


export default serverApi;