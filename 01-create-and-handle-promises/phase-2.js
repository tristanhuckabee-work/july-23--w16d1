function stretch(timeleft) {
  return new Promise((res, rej) => {
    if (timeleft < 1000) {
      rej("not enough time to stretch")
      return
    }
    setTimeout(() => {
      console.log("done stretching");
      res(timeleft - 1000);
    }, 1000);
  });
}

function runOnTreadmill(timeleft) {
  return new Promise((res, rej) => {
    if (timeleft < 500) {
      rej("not enough time to run on treadmill")
      return
    }
    setTimeout(() => {
      console.log("done running on treadmill");
      res(timeleft - 500);
    }, 500);
  });
}

function liftWeights(timeleft) {
  return new Promise((res, rej) => {
    if (timeleft < 2000) {
      rej("not enough time to lift weights")
      return;
    }
    setTimeout(() => {
      console.log("done lifting weights");
      res(timeleft - 2000);
    }, 2000);
  });
}

function workout(timeleft) {
  stretch(timeleft)
    .then(res => runOnTreadmill(res))
    .then(res => liftWeights(res))
    .then(res => console.log(`done working out ${res/1000}s`))
    .catch((err) => console.log(err));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left