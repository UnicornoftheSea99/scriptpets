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
    return coins;
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
        setState: { brave: true},
        nextText: 10
      },
      {
        text: 'Walk away from the ocean towards the town',
        requiredState:(currentState) => currentState.brave, 
        setState: { brave: true},
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
            text: 'End Game',
            nextText: 18
        },
        {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'You have died honorably in battle. You have earned 10 coins.',
    bank: earningMoney(10),
    options: [
        {
            text: 'End Game',
            nextText: 18
        },
        {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You pull out a sword and charge at the troll. You succeed in slaying it. You are rewarded 10 coins.',
    bank: earningMoney(10),
    options: [
      {
        text: 'Accept the coins and continue on your way.',
        setState: { brave: true},
        nextText: 12
      },
      {
        text: 'Go home with what coins you have earned.',
        setState: { brave: false},
        nextText: 13
      }
    ]
  },
  {
    id: 7,
    text: 'You manage to distract the troll, but are injured in the process. You are rewarded 5 coins.',
    bank: earningMoney(5),
    options: [
      {
        text: 'Accept the coins and continue on your way.',
        setState: { brave: true},
        nextText: 12
      },
      {
        text: 'Go home with what coins you have earned.',
        setState: { brave: false},
        nextText: 13
      },
    ]
  },
  {
    id: 8,
    text: 'You succeed in reasoning with the troll. He shakes your hand and gives you 15 coins for a scintillating conversation.',
    bank: earningMoney(15),
    options: [
        {
            text: 'Accept the coins and continue on your way.',
            setState: { brave: true},
            nextText: 12
          },
          {
            text: 'Go home with what coins you have earned.',
            setState: { brave: false},
            nextText: 13
          },
    ]
  },
  {
    id: 9,
    text: 'The troll does not agree with your company and decided to eat you. You die instantly but earn 5 coins.',
    bank: earningMoney(15),
    options: [
        {
            text: 'End Game',
            nextText: 18
        },
        {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'You walk towards the ocean and the fearsome sea monster the Unagi rises from the water. Do you:',
    options: [
      {
        text: 'Stay to fight the Unagi',
        setState: { brave: true},
        nextText: (function(num){
            if(num ==0){return 14;} 
            else if (num==1){return 5;} 
            else if (num==2){return 5;} randNumber()})
      },
      {
        text: 'Run away from the water towards the town.',
        setState: { brave: false},
        nextText: 11
      },
      {
        text: 'Run away back home',
        setState: { brave: false},
        nextText: 4
      }
    ]
  },
  {
    id: 11,
    text: 'You walk towards the town and come across the locals, who are not fond of outsiders. They ask you to fight the Unagi.',
    options: [
        {
            text: 'You agree.',
            setState: { brave: true},
            nextText: (function(num){
                if(num ==0){return 14;} 
                else if (num==1){return 5;} 
                else if (num==2){return 5;} randNumber()})
        },
        {
            text: 'You refuse and are chased out of town. You are then caught in a tsunami and die.',
            setState: { brave: false},
            nextText: 18
        }

    ]
  },
  {
    id: 12,
    text: 'You continue on and find a myserious box lying in the road. Do you:',
    options: [
       {
        text: 'Open it.',
        setState: { brave: true},
        nextText: 15
      },
      {
        text: 'Leave it alone and continue on.',
        setState: { brave: false},
        nextText: 16
      }
    ]
  },
  {
    id: 13,
    text: 'You head home after a fruitful adventure.',
    options: [
        {
            text: 'End Game',
            nextText: 18
        },
        {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: 'You defeat the Unagi and the locals, who had been terrorized by the Unagi for years, thank you with 20 coins.',
    bank: earningMoney(20),
    options: [
        {
            text: 'Accept the coins and continue on your way.',
            setState: { brave: true},
            nextText: 12
          },
          {
            text: 'Go home with what coins you have earned.',
            setState: { brave: false},
            nextText: 13
          },
    ]
  },
  {
    id: 15,
    text: 'The box contains lost Aztec gold. You get 40 coins. Your adventure has come to a close',
    bank: earningMoney(20),
    options: [
        {
            text: 'Finish Adventure.',
            nextText: 17
          },
    ]
  },
  {
    id: 16,
    text: 'You leave the box alone and successfully reach your destination. This adventure has come to a close.',
    options: [
        {
            text: 'Finish Adventure.',
            nextText: 17
          },
    ]
  },
  {
    id: 17,
    text: 'Congratulations on completing all the challenges in your path. Here are 10 bonus coins.',
    bank: earningMoney(10),
  },
  {
    id: 18,
    text: 'Your adventure ends here.',
  }
]

startAdventure()