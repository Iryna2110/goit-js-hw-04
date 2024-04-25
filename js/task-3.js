const profile = {
  username: "Jacob",
  playTime: 300,

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },

  changeUserName(newUsername) {
    this.username = newUsername;
  },

updatePlayTime(newPlayTime) {
    this.playTime = this.playTime + newPlayTime;
  },
}


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUserName("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"