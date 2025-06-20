console.log("lets write javascript");

async function main() {
  let a = await fetch("file:///Users/theend/Desktop/spotify/songs/");
  let response = await a.text();
  console.log(response);
}
main();
