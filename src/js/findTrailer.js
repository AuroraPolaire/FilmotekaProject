export function findTrailer(videos) {
    if (videos.length == 0) {
        return;
    }
    for (const v of videos) {
        switch (v.type) {
            case "Trailer":
                return v.key;
                break;
            case "Teaser":
                return v.key;
                break;
            default:
                continue;
        }
    }
    return videos[0].key;
}