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

coins =0;
function earningMoney(amt){
    coins+=amt
    console.log(coins)
}

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
        setState: { brave: true},
        nextText: (function(num){
            if(num ==0){return 5;} 
            else if (num==1){return 6;} 
            else if (num==2){return 7;} randNumber()})
      },
      {
        text: 'Try to reason with the troll',
        requiredState:(currentState) => currentState.brave, 
        setState: { brave: true},
        nextText: (function(num){
            if(num ==0){return 5;} 
            else if (num==1){return 8;} 
            else if (num==2){return 9;} randNumber()})
      },
      {
        text: 'Run away back home',
        setState: { brave: false},
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
        requiredState:(currentState) => currentState.brave, 
        nextText: 10
      },
      {
        text: 'Walk away from the ocean towards the town',
        requiredState:(currentState) => currentState.brave, 
        nextText: 11
      },
      {
        text: 'Turn around and go home',
        setState: { brave: false},
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'You have run home scared and so will return penniless.',
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
    bank= earningMoney(10),
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You pull out a sword and charge at the troll. You succeed in slaying it. You are rewarded 10 coins.',
    bank= earningMoney(15),
    options: [
      {
        text: 'Accept the coins and continue on your way.',
        nextText: 12
      },
      {
        text: 'Go home with what coins you have earned.',
        nextText: 13
      }
    ]
  },
  {
    id: 7,
    text: 'You manage to distract the troll, but are injured in the process. You are rewarded 5 coins.',
    options: [
      {
        text: 'Accept the coins and continue on your way.',
        bank= earningMoney(5),
        nextText: 12
      },
      {
        text: 'Go home with what coins you have earned.',
        nextText: 13
      },
    ]
  },
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