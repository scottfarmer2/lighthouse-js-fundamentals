var loopylighthouse = function(range, multiples, words) {

  for (var nums = range[0]; nums <= range[1]; nums++) {
    if (nums % multiples[0] === 0 && nums % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    }
    else if (nums % multiples[0] === 0) {
      console.log(words[0]);
    }
    else if (nums % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(nums);
    }
  }
}
loopylighthouse([15,90], [2, 5], ["Batty", "Beacon"]);