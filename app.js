function wearPPE() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Wearing PPE"), 2000);
  });
}

function fightCorona() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fighting Corona"), 1000);
  });
}

// here is my change to get Wearing PPE first , then Fighting Corona
// make execute function async
async function execute() {
  // make wearPPE await
  await wearPPE().then((result) => console.log(result));
  fightCorona().then((result) => console.log(result));
}

execute();
