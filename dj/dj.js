var createSong = (name, artist) => {
    hasBeenPlayed = false
    return { name, artist, hasBeenPlayed }
}

var playSong = (song) => {
    var hasBeenPlayed = song.hasBeenPlayed
    hasBeenPlayed = true
    return { hasBeenPlayed }
}

var makePlaylist = (name, songs) => {
    return { name, songs }
}

var addSongToPlaylist = (playlist, song) => {
    playlist.songs.push(song)
    var songs = playlist.songs
    return { songs }
}
var playAllSongs = (playlist) => {
    for (let index = 0; index < playlist.songs.length; index++) {
        playlist.songs[index].hasBeenPlayed = true
    }
    return playlist
}
module.exports = {
    createSong,
    playSong,
    makePlaylist,
    addSongToPlaylist,
    playAllSongs,
}
