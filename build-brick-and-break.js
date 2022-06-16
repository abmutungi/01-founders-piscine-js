const build = (bricks) => {
  let i = 1;
  function oneBrick() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", `brick-${i}`);
    document.body.appendChild(newDiv);
    if ((i + 1) % 3 === 0) {
      newDiv.setAttribute("data-foundation", true);
    }
    i++;
  }
  const intV = setInterval(oneBrick, 100);
  setTimeout(incr, 100 * bricks);
  function incr() {
    clearInterval(intV);
  }
};

const repair = (...ids) => {
  let bricksToReturn = [];
  let allBricks = document.querySelectorAll("div");
  let idAll = Array.from(allBricks);
  let trigBricks = Array.from(ids);
  console.log(idAll);
  console.log(trigBricks);

  for (let i = 0; i < idAll.length; i++) {
    if (trigBricks.includes(idAll[i].id)) {
      bricksToReturn.push(idAll[i]);
    }
  }
  console.log(bricksToReturn);
  for (let brick of bricksToReturn) {
    if (brick.hasAttribute("data-foundation")) {
      brick.setAttribute("data-repaired", "true");
    } else {
      brick.setAttribute("data-repaired", "in progress");
    }
  }

  //   if (document.getAttribute("foundation") === true) {
  // }
};
const destroy = () => {
  let allBricks = document.querySelectorAll("div");
  allBricks[allBricks.length - 1].remove();
};

export { build, repair, destroy };
