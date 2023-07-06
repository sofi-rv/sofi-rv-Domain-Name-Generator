let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "raccon"];
let action = ["run", "dance"];

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      for (let d = 0; d < action.length; d++) {
        document.querySelector("#domain").innerHTML +=
          "<p>" + pronoun[a] + adj[b] + noun[c] + action[d] + ".com</p>";
      }
    }
  }
}
