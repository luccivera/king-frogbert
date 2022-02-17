window.onload = function () {
  let characterObj = document.getElementById("characterObj").contentDocument;
  let characterText = document.getElementById("characterText");
  let blushLeft = characterObj.getElementById("blushLeft");
  let blushRight = characterObj.getElementById("blushRight");
  let eyeLeft = characterObj.getElementById("eyeLeft");
  let eyeRight = characterObj.getElementById("eyeRight");
  let eyelidLeft = characterObj.getElementById("eyelidLeft");
  let eyelidRight = characterObj.getElementById("eyelidRight");
  let eyesDead = characterObj.getElementById("eyesDead");
  let eyesHungry = characterObj.getElementById("eyesHungry");
  let fly1 = characterObj.getElementById("fly1");
  let fly2 = characterObj.getElementById("fly2");
  let fly3 = characterObj.getElementById("fly3");
  let head = characterObj.getElementById("head");
  let mouth = characterObj.getElementById("mouth");
  let mouthAngry = characterObj.getElementById("mouthAngry");
  let mouthDeadTongue = characterObj.getElementById("mouthDeadTongue");
  let mouthHungryTongue = characterObj.getElementById("mouthHungryTongue");
  let mouthSick = characterObj.getElementById("mouthSick");
  let pupilLeft = characterObj.getElementById("pupilLeft");
  let pupilRight = characterObj.getElementById("pupilRight");
  let sweatbeads = characterObj.getElementById("sweatbeads");

  //* Array of objects
  let blush = [blushLeft, blushRight];
  let eyes = [eyeLeft, eyeRight];
  let flies = [fly1, fly2, fly3];
  let pupils = [pupilLeft, pupilRight];

  //* Retreiving Button States from HTML
  let angryButton = document.getElementById("angry");
  let deadButton = document.getElementById("dead");
  let happyButton = document.getElementById("happy");
  let feedPetButton = document.getElementById("feedPet");
  let neutralButton = document.getElementById("neutral");
  let sadButton = document.getElementById("sad");
  let sickButton = document.getElementById("sick");
  let = document.getElementById("");
  let start = document.getElementById("startGame");

  //* Receiving UI Buttons from HMTL
  let compliment = document.getElementById("compliment");

  //* Animation functions on button click
  angryButton.addEventListener("click", function () {
    neutral();
    angry();
  });
  deadButton.addEventListener("click", function () {
    neutral();
    dead();
    frogbert.die();
  });
  happyButton.addEventListener("click", function () {
    neutral();
    happy();
  });
  feedPetButton.addEventListener("click", function () {
    neutral();
    hungry();
    frogbert.randomFood();
  });
  neutralButton.addEventListener("click", function () {
    neutral();
  });
  sadButton.addEventListener("click", function () {
    neutral();
    sad();
  });
  sickButton.addEventListener("click", function () {
    neutral();
    sick();
  });

  //*UI Buttons on click

  start.addEventListener("click", function () {
    neutral();

    frogbert.startMetabolism();
    frogbert.resetFood();
    frogbert.petMetabolism(1000);
  });

  compliment.addEventListener("click", function () {
    frogbert.activePlayer();
  });

  // *******Animation Buttons*******

  // Angry animation
  function angry() {
    // Angry Animations
    gsap.to(mouth, {
      opacity: 0,
    });
    gsap.to(blush, {
      fill: "#e42720",
      autoAlpha: 1,
    });
    gsap.to(eyelidLeft, {
      duration: 0.5,
      fill: "#2fac66",
      opacity: 1,
      rotate: 10,
      x: 2,
      y: -4,
    });
    gsap.to(eyelidRight, {
      duration: 0.5,
      fill: "#2fac66",
      opacity: 1,
      rotate: -10,
      x: -2,
      y: 1,
    });

    gsap.to(mouthAngry, {
      autoAlpha: 1,
    });
    gsap.to(pupilLeft, {
      opacity: 1,
      x: 4,
      y: 6,
      duration: 2,
    });
    gsap.to(pupilRight, {
      opacity: 1,
      x: -4,
      y: 6,
      duration: 2,
    });
  }

  // Dead animation
  function dead() {
    gsap.to(eyes, {
      opacity: 0,
    });
    gsap.to(eyesDead, {
      opacity: 1,
    });
    gsap.to(mouth, {
      opacity: 1,
      duration: 0.5,
      rotation: 180,
      transformOrigin: "center center",
      x: 3,
      y: 8,
    });
    gsap.to(mouthDeadTongue, {
      opacity: 1,
    });
    gsap.to(pupils, {
      opacity: 0,
    });

    gsap.to(fly1, {
      y: 350,
      delay: 0.2,
    });
    gsap.to(fly2, {
      y: 350,
      delay: 0.42,
    });
    gsap.to(fly3, {
      y: 370,
      delay: 0.5,
    });

    deadText = "Who put these poisoned flies on the menu";
    characterText.innerHTML = deadText;
  }

  // Happy animation
  function happy() {
    // Happy Animation Start
    gsap.to(head, {
      fill: "#2fac66",
    });

    gsap.to(blush, {
      opacity: 1,
      fill: "#e3a5a3",
    });

    gsap.to(eyes, {
      opacity: 1,
    });
    gsap.to(pupils, {
      x: 0,
      y: 0,
      opacity: 1,
    });
    happyText = "I am very content. Frog Laland is thriving under my rule!";
    characterText.innerHTML = happyText;
  }

  // Hungry Animation
  function hungry() {
    // Hungry Animation Start
    gsap.to(head, {
      fill: "#2fac66",
    });

    gsap.to(eyes, {
      opacity: 1,
    });

    let hungryTL = gsap.timeline();
    hungryTL.to(
      fly2,
      {
        opacity: 0,
      },
      1
    );
    hungryTL.to(
      fly3,
      {
        duration: 0.5,
        rotation: -40,
        x: -18,
        y: 33,
      },
      1
    );
    hungryTL.to(
      fly1,
      {
        duration: 0.5,
        rotation: 20,
        x: 400,
        y: -10,
      },
      2
    );

    gsap.to(blush, {
      opacity: 1,
      fill: "#e3a5a3",
    });
    gsap.to(eyesHungry, {
      opacity: 1,
    });
    gsap.to(mouthHungryTongue, {
      opacity: 1,
    });
    gsap.to(pupils, {
      autoAlpha: 0,
    });
  }
  //   Neutral animation
  function neutral() {
    // Reset Animation
    gsap.to(eyelidLeft, {
      duration: 0.5,
      fill: "#2fac66",
      opacity: 0,
      rotate: 0,
      x: 0,
      y: 0,
    });
    gsap.to(eyelidRight, {
      duration: 0.5,
      fill: "#2fac66",
      opacity: 01,
      rotate: 0,
      x: 0,
      y: 0,
    });
    gsap.to(eyesHungry, {
      opacity: 0,
    });
    gsap.to(eyesDead, {
      opacity: 0,
    });

    gsap.to(sweatbeads, {
      opacity: 0,
    });

    gsap.to(blush, {
      opacity: 0,
    });
    gsap.to(eyelidLeft, {
      opacity: 0,
    });
    gsap.to(eyelidRight, {
      opacity: 0,
    });

    gsap.to(mouthSick, {
      opacity: 0,
    });

    gsap.to(mouthAngry, {
      opacity: 0,
    });

    gsap.to(mouthDeadTongue, {
      opacity: 0,
    });

    gsap.to(mouthHungryTongue, {
      opacity: 0,
    });

    gsap.to(head, {
      fill: "#2fac66",
    });

    // Start of Neutral Animation

    gsap.to(pupils, {
      x: 0,
      y: 0,
      autoAlpha: 1,
    });
    gsap.to(eyes, {
      autoAlpha: 1,
    });
    gsap.to(mouth, {
      opacity: 1,
      duration: 0,
      rotation: 360,
      transformOrigin: "center center",
      x: 0,
    });
    gsap.set(flies, {
      x: 0,
      y: 0,
    });

    // gsap.set(
    //   fly2,
    //   {
    //     opacity: 1,
    //   },
    //   +1
    // );

    neutralText = "Guess I have to be a ruler today. Bring me my crown";
    characterText.innerHTML = neutralText;
  }

  // Sad Animation
  function sad() {
    gsap.to(blush, {
      opacity: 1,
      fill: "#e3a5a3",
    });
    gsap.to(mouth, {
      opacity: 1,
      duration: 0.5,
      rotation: 180,
      transformOrigin: "center center",
      x: 3,
    });
    gsap.to(pupils, {
      autoAlpha: 1,
    });
    gsap.to(pupilLeft, {
      x: 4,
      y: 10,
      duration: 4,
    });
    gsap.to(pupilRight, {
      x: -4,
      y: 10,
      duration: 4,
    });
    sadText =
      "Where are all the frogettes? Where is my court? Hello is anyone there?!";
    characterText.innerHTML = sadText;
  }

  // Sick Animation
  function sick() {
    // Sick Animation Start

    gsap.to(mouth, {
      opacity: 0,
    });
    gsap.to(sweatbeads, {
      opacity: 1,
      y: 15,
    });

    gsap.to(blush, {
      opacity: 1,
      fill: "#26326C",
    });
    gsap.to(eyelidLeft, {
      duration: 0.5,
      fill: "#3C78CE",
      opacity: 1,
    });
    gsap.to(eyelidRight, {
      duration: 0.5,
      fill: "#3C78CE",
      opacity: 1,
    });

    gsap.to(head, {
      fill: "#3C78CE",
    });

    gsap.to(mouthSick, {
      opacity: 1,
    });

    gsap.to(pupilLeft, {
      x: 4,
      y: 7,
      duration: 1,
    });

    gsap.to(pupilRight, {
      x: -4,
      y: 7,
      duration: 1,
    });
    sickText =
      "Maybe those mesquite slugs weren't a good choice. I should've had the choclate ants instead but they told me to watch my weight.<br> Maybe it was all a ploy for my crown";
    characterText.innerHTML = sickText;
  }
};
