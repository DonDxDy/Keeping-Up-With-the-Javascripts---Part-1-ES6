// Building  a song.js program to output liked song.

//Create a function to house song catergorization
function mySong(genre, album, songtitle, artist, lengths, releaseYear, recordLabel, producedBy) {
    this.genre = genre;
    this.album = album;
    this.songtitle = songtitle;
    this.artist = artist;
    this.lengths = lengths;
    this.releaseYear = releaseYear;
    this.recordLabel = recordLabel;
    this.producedBy = producedBy;
};

//create a variable to hold the input value in an array
var songDetail = new mySong("Rap & Hip-Hop","The Playmaker","Fada Fada (ft olamide)","Phyno", 364, 2016, "Black Cherry","MasterKraft");
//display songDetail in the below output

console.log ("Genre : " + songDetail.genre);
console.log("Album : " + songDetail.album);
console.log("Song Name : " + songDetail.songtitle);
console.log("Performed By : " + songDetail.artist);
console.log("Song Duration : " + songDetail.lengths);
console.log("Year Released : " + songDetail.releaseYear);
console.log("Record label : " + songDetail.recordLabel);
console.log("Producer : " + songDetail.producedBy);
