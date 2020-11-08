const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startAdventure() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startAdventure()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

function randNumber(){
    result = Math.floor(Math.random() * 3)
    return result; 
}

// class Item {
//     constructor(nam, stat) {
//         this.name = nam;
//         this.state = stat;
//     }
// };

// class trunk extends Item {
//     constructor(name, money, toys) {
//         super(name, stt);
//         this.money = money;
//         this.toys=toys;
//     }
// };

const textNodes = [
  {
    id: 1,
    text: 'Your Adventure Awaits! Choose Your Path',
    options: [
      {
        text: 'Go into the forest',
        setState: { brave: true },
        nextText: 2
      },
      {
        text: 'Go towards the ocean',
        setState: { brave: true },
        nextText: 3
      },
      {
        text: 'Go home.',
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: 'You venture forth into the forest where you come across a troll.',
    options: [
      {
        text: 'Fight the troll',
        requiredState:(currentState) => currentState.brave, 
        //requiredState: (currentState) => currentState.blueGoo,
        setState: { brave: true},
        nextText: (function(num){
            if(num ==0){return 5;} 
            else if (num==1){return 6;} 
            else if (num==2){return 7;} randNumber()})
      },
      {
        text: 'Try to reason with the troll',
        //requiredState: (currentState) => currentState.blueGoo,
        //setState: { blueGoo: false, shield: true },
        nextText: (function(num){
            if(num ==0){return 5;} 
            else if (num==1){return 8;} 
            else if (num==2){return 9;} randNumber()})
      },
      {
        text: 'Run away back home',
        nextText: 4
      }
    ]
  },
  {
    id: 3,
    text: 'You venture closer to the ocean. In front of you are two paths. Do you:',
    options: [
      {
        text: 'Walk closer towards the ocean.',
        nextText: 4
      },
      {
        text: 'Walk towards the town',
        nextText: 5
      },
      {
        text: 'Turn around and go home',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'You have run home scared and so will go home penniless.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'You have died honorably in battle. You have earned +10 coins.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
//   {
//     id: 6,
//     text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
//     options: [
//       {
//         text: 'Explore the castle',
//         nextText: 7
//       }
//     ]
//   },
//   {
//     id: 7,
//     text: 'While exploring the castle you come across a horrible monster in your path.',
//     options: [
//       {
//         text: 'Try to run',
//         nextText: 8
//       },
//       {
//         text: 'Attack it with your sword',
//         requiredState: (currentState) => currentState.sword,
//         nextText: 9
//       },
//       {
//         text: 'Hide behind your shield',
//         requiredState: (currentState) => currentState.shield,
//         nextText: 10
//       },
//       {
//         text: 'Throw the blue goo at it',
//         requiredState: (currentState) => currentState.blueGoo,
//         nextText: 11
//       }
//     ]
//   },
//   {
//     id: 8,
//     text: 'Your attempts to run are in vain and the monster easily catches.',
//     options: [
//       {
//         text: 'Restart',
//         nextText: -1
//       }
//     ]
//   },
//   {
//     id: 9,
//     text: 'You foolishly thought this monster could be slain with a single sword.',
//     options: [
//       {
//         text: 'Restart',
//         nextText: -1
//       }
//     ]
//   },
//   {
//     id: 10,
//     text: 'The monster laughed as you hid behind your shield and ate you.',
//     options: [
//       {
//         text: 'Restart',
//         nextText: -1
//       }
//     ]
//   },
//   {
//     id: 11,
//     text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
//     options: [
//       {
//         text: 'Congratulations. Play Again.',
//         nextText: -1
//       }
//     ]
  //}
]

startAdventure()