// thrown together by eaqualoti! 
(function() {
  const guiContainer = document.createElement('div');
  guiContainer.style.position = 'fixed';
  guiContainer.style.top = '10px';
  guiContainer.style.left = '10px';
  guiContainer.style.display = 'block';
  guiContainer.style.background = '#212121';
  guiContainer.style.padding = '10px';
  guiContainer.style.borderRadius = '5px';
  document.body.appendChild(guiContainer);

  var isDragging = false
  guiContainer.addEventListener('mousedown', function(e) {
      isDragging = true;
      offsetX = e.clientX - guiContainer.getBoundingClientRect().left;
      offsetY = e.clientY - guiContainer.getBoundingClientRect().top;
  });

  // Event listener for mouseup
  window.addEventListener('mouseup', function() {
      isDragging = false;
  });

  // Event listener for mousemove
  window.addEventListener('mousemove', function(e) {
      if (isDragging) {
          guiContainer.style.left = e.clientX - offsetX + 'px';
          guiContainer.style.top = e.clientY - offsetY + 'px';
      }
  });


  // Adding Watermark Image
  const watermarkImage = document.createElement('img');
  watermarkImage.src = 'https://i.postimg.cc/X75Rdjw7/sai.png';
  watermarkImage.style.width = '50px';
  guiContainer.appendChild(watermarkImage);

  const label0 = document.createElement('label');
  label0.textContent = '   Summit English';
  label0.style.color = 'white';
  guiContainer.appendChild(label0);


  // Adding Line Separator
  const separatorLine = document.createElement('hr');
  separatorLine.style.border = '1px solid white';
  separatorLine.style.marginTop = '10px';
  separatorLine.style.marginBottom = '10px';
  
  guiContainer.appendChild(separatorLine);


  // Adding Textbox
  const DictionaryLabel = document.createElement('label');
  DictionaryLabel.textContent = 'Default Dataset';
  DictionaryLabel.style.color = 'white';
  guiContainer.appendChild(DictionaryLabel);

  const gokys = document.createElement('div');
  guiContainer.appendChild(gokys);
  // dropdown? no way!

  var button = document.createElement("button");
  button.textContent = "Dictionaries";
  button.className = "dropdown-button";
  guiContainer.appendChild(button)
  button.onclick = toggleDropdown;

  // Create a div for the dropdown content
  var dropdownContent = document.createElement("div");
  dropdownContent.className = "dropdown-content";
  dropdownContent.id = "myDropdown";
  dropdownContent.style.display = "none"; // Hide initially

  // Create dropdown items and add them to the dropdown content
  var currentdictionary = 'https://raw.githubusercontent.com/DO-Ui/bombparty-bot/master/wordlist.txt'
  var items = [
      "Default Dictionary",
      "English Dictionary",
      "Summit Dictionary",
      "Scrabble's Dictionary"
  ];
  var links = [
      "https://raw.githubusercontent.com/DO-Ui/bombparty-bot/master/wordlist.txt",
      "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt",
      "https://raw.githubusercontent.com/Dialga156b/JKLMDynamicLibrary/main/JKLMDynamicConstruct",
      "https://raw.githubusercontent.com/Dialga156b/JKLMDynamicLibrary/main/preexisting"
  ];
  items.forEach(function(itemText) {
      var item = document.createElement("div");
      item.className = "dropdown-item";
      item.textContent = itemText;
      item.style.color = 'white';
      item.onclick = function() {
          console.log(itemText + " clicked");
          currentdictionary = links[items.indexOf(itemText)];
          DictionaryLabel.textContent = itemText
      };
      const itemtxt = item.textContent
      item.onmouseover = function() {
        item.textContent = '-> ' + itemtxt
      }
      item.onmouseleave = function() {
        item.textContent = itemtxt
      }
      dropdownContent.appendChild(item);
  });

  guiContainer.appendChild(dropdownContent);

  // Toggle the dropdown display
  function toggleDropdown() {
      dropdownContent.style.display = (dropdownContent.style.display === "none") ? "block" : "none";
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
      dropdownContent.style.display = "none";
  }
  };

  const hoohaah = document.createElement('div');
  guiContainer.appendChild(hoohaah);


  // Adding Checkbox Container
  const checkboxContainer1 = document.createElement('div');
  guiContainer.appendChild(checkboxContainer1);


  const checkbox1 = document.createElement('input');
  checkbox1.type = 'checkbox';
  checkboxContainer1.appendChild(checkbox1);


  const label1 = document.createElement('label');
  label1.textContent = ' Master';
  label1.style.color = 'white';
  checkboxContainer1.appendChild(label1);


  const checkboxContainer2 = document.createElement('div');
  guiContainer.appendChild(checkboxContainer2);


  const checkbox2 = document.createElement('input');
  checkbox2.type = 'checkbox';
  checkboxContainer2.appendChild(checkbox2);


  const label2 = document.createElement('label');
  label2.textContent = ' AutoAnswer';
  label2.style.color = 'white';
  checkboxContainer2.appendChild(label2);

  const checkboxContainer3 = document.createElement('div');
  guiContainer.appendChild(checkboxContainer3);


  const checkbox3 = document.createElement('input');
  checkbox3.type = 'checkbox';
  checkboxContainer3.appendChild(checkbox3);


  const label3 = document.createElement('label');
  label3.textContent = ' Humanizer [ Beta ]';
  label3.style.color = 'white';
  checkboxContainer3.appendChild(label3);

  const checkboxContainer4 = document.createElement('div');
  guiContainer.appendChild(checkboxContainer4);


  const checkbox4 = document.createElement('input');
  checkbox4.type = 'checkbox';
  checkboxContainer4.appendChild(checkbox4);


  const label4 = document.createElement('label');
  label4.textContent = ' AutoLeaker';
  label4.style.color = 'white';
  checkboxContainer4.appendChild(label4);

  const checkboxContainer14 = document.createElement('div');
  guiContainer.appendChild(checkboxContainer14);


  const checkbox14 = document.createElement('input');
  checkbox14.type = 'checkbox';
  checkboxContainer14.appendChild(checkbox14);


  const label14 = document.createElement('label');
  label14.textContent = ' AutoJoin';
  label14.style.color = 'white';
  checkboxContainer14.appendChild(label14);

  // const checkboxContainer5 = document.createElement('div');
  // guiContainer.appendChild(checkboxContainer5);
//----------------------------------------------------------------------------// search types
  const STseparatorLine = document.createElement('hr');
  STseparatorLine.style.border = '1px solid white';
  STseparatorLine.style.marginTop = '10px';
  STseparatorLine.style.marginBottom = '10px';
  guiContainer.appendChild(STseparatorLine);

  // const searchtypesdiv = document.createElement('div');
  // guiContainer.appendChild(searchtypesdiv);

  const SearchtypesLabel = document.createElement('label');
  SearchtypesLabel.textContent = '-SearchTypes-';
  SearchtypesLabel.style.color = 'white';
  guiContainer.appendChild(SearchtypesLabel);

  const yetanotherdiv = document.createElement('div');
  guiContainer.appendChild(yetanotherdiv);

  const checkbox5 = document.createElement('input');
  checkbox5.type = 'checkbox';
  checkbox5.checked = false
  guiContainer.appendChild(checkbox5);
  checkbox5.checked = true

  const label5 = document.createElement('label');
  label5.textContent = ' Random';
  label5.style.color = 'white';
  guiContainer.appendChild(label5);

  const longestdiv = document.createElement('div');
  guiContainer.appendChild(longestdiv);

  const checkbox6 = document.createElement('input');
  checkbox6.type = 'checkbox';
  checkbox6.checked = false
  guiContainer.appendChild(checkbox6);

  const label6 = document.createElement('label');
  label6.textContent = ' Longest';
  label6.style.color = 'white';
  guiContainer.appendChild(label6);

  const shortestdiv = document.createElement('div');
  guiContainer.appendChild(shortestdiv);

  
  const checkbox7 = document.createElement('input');
  checkbox7.type = 'checkbox';
  checkbox7.checked = false
  guiContainer.appendChild(checkbox7);

  const label7 = document.createElement('label');
  label7.textContent = ' Shortest';
  label7.style.color = 'white';
  guiContainer.appendChild(label7);

  const checkboxContainer15 = document.createElement('div');
  guiContainer.appendChild(checkboxContainer15);


  const checkbox15 = document.createElement('input');
  checkbox15.type = 'checkbox';
  checkboxContainer15.appendChild(checkbox15);


  const label15 = document.createElement('label');
  label15.textContent = ' GameAlphabet';
  label15.style.color = 'white';
  checkboxContainer15.appendChild(label15);

  const separatoragain = document.createElement('hr');
  separatoragain.style.border = '1px solid white';
  separatoragain.style.marginTop = '10px';
  separatoragain.style.marginBottom = '10px';
  guiContainer.appendChild(separatoragain);
//--------------------------------------------------------------------// statuses
  const statusLabel = document.createElement('label');
  statusLabel.textContent = 'Status: OFF';
  statusLabel.style.color = 'white';
  guiContainer.appendChild(statusLabel);


  const modecont = document.createElement('div');
  guiContainer.appendChild(modecont);



  const watermarkContainer = document.createElement('div');
  guiContainer.appendChild(watermarkContainer);


  const watermark = document.createElement('label');
  watermark.textContent = 'RSHIFT to toggle';
  watermark.style.color = 'white';
  watermarkContainer.appendChild(watermark);

  const watermarkContainer2 = document.createElement('div');
  guiContainer.appendChild(watermarkContainer2);


  const watermark2 = document.createElement('label');
  watermark2.textContent = 'Made by eaqualoti';
  watermark2.style.color = 'white';
  watermarkContainer2.appendChild(watermark2);

  const watermarkContainer3 = document.createElement('div');
  guiContainer.appendChild(watermarkContainer3);


  const watermark3 = document.createElement('label');
  watermark3.textContent = 'github.com/Dialga156b';
  watermark3.style.color = 'white';
  watermarkContainer3.appendChild(watermark3);

  //let milestone
  let isMasterEnabled = false;
  let isAutoAnswerEnabled = false;
  let isHumanizerEnabled = false;
  let isAutoLeakEnabled = false;
  let isAutoJoinEnabled = false;
  let isAutoLetterEnabled = false;
  // Add event listener for Ctrl+K to toggle GUI visibility using keyup
  let currentSortMode = 1
  document.addEventListener('keyup', (event) => {
      if (event.code == "ShiftRight") {
          toggleGUIVisibility();
      }
  });

  checkbox5.addEventListener("change",function() {
      if (checkbox5.checked) {
          checkbox6.checked = false
          checkbox7.checked = false 
          checkbox15.checked = false 
          currentSortMode = 1
      }
  });

  checkbox6.addEventListener("change",function() {
      if (checkbox6.checked) {
          checkbox7.checked = false
          checkbox5.checked = false 
          checkbox15.checked = false 
          currentSortMode = 2
      }
  });

  checkbox7.addEventListener("change",function() {
      if (checkbox7.checked) {
          checkbox6.checked = false
          checkbox5.checked = false 
          checkbox15.checked = false 
          currentSortMode = 3
      }
  });

  checkbox15.addEventListener("change",function() {
      if (checkbox15.checked) {
          checkbox7.checked = false
          checkbox6.checked = false 
          checkbox5.checked = false 
          currentSortMode = 4
      }
  });
  
  // Function to update the status label based on checkbox states
  function updateStatusLabel() {
      isAutoJoinEnabled = checkbox14.checked;
      isMasterEnabled = checkbox1.checked;
      isAutoAnswerEnabled = checkbox2.checked;
      isHumanizerEnabled = checkbox3.checked;
      isAutoLeakEnabled = checkbox4.checked;
      searchMode = checkbox5.checked;
      isAutoLetterEnabled - checkbox15.checked;
      if (!isMasterEnabled) {statusLabel.textContent = 'Status: OFF'}
  }

  // Add event listeners to checkboxes to update the status label
  checkbox1.addEventListener('change', updateStatusLabel);
  checkbox2.addEventListener('change', updateStatusLabel);
  checkbox3.addEventListener('change', updateStatusLabel);
  checkbox4.addEventListener('change', updateStatusLabel);
  checkbox5.addEventListener('change', updateStatusLabel);
  checkbox6.addEventListener('change', updateStatusLabel);
  checkbox7.addEventListener('change', updateStatusLabel);
  checkbox14.addEventListener('change', updateStatusLabel);
  checkbox15.addEventListener('change', updateStatusLabel);

  // Function to toggle the visibility of the GUI
  function toggleGUIVisibility() {
      guiContainer.style.display = (guiContainer.style.display === 'none') ? 'block' : 'none';
  }
  //socket functions
  socket.on('nextTurn', function(peerID) {
      writeWord(false,milestone.syllable)  
      statusLabel.textContent = "Status: Waiting"
  });

  socket.on('failWord', function() {
      console.log("Failed:Retrying!")
      statusLabel.textContent = "Status: Failed!"
      writeWord(true,milestone.syllable)
  });

  socket.on('setMilestone', function (newMilestone){
    if (isAutoJoinEnabled == false) return;
    
    console.log("milestone updated!")
      if (newMilestone.name == 'seating') {
        socket.emit("joinRound")
        statusLabel.textContent = "Status: Joined Round!"
        console.log("Joined round successfully!")
      } else{
         statusLabel.textContent = "Status: Waiting.."
      }
  });

  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  function getRandomInt(min, max) {
      var diff = ( max - min )
      return Math.ceil(Math.random() * diff) + min;
  }

  async function writeWord(failsafe,syllable) {
    console.log(milestone)
      wordInput.value = '';
      //milestone.syllable = syllable;
      //console.log(`Syllable:${milestone}`);
      //console. log(`~~~~~~~~~~~~~~~~~~~~~~`);
      //if (isMasterEnabled == false) {return}
      let wordlist = [];
      let customURL = currentdictionary;
      console.log(`using dictionary ${customURL}`)
      //console.log("nextturn!")
      fetch(`${customURL}`)
      .then(response => response.text())
      .then(data => {
        wordlist = data.split(`\n`);
        wordlist = wordlist.map(word => word.trim());
      })
          .then(async () => {
              const syllableDiv = document.querySelector(".syllable");
              if (syllableDiv !== null) {
                  if (syllableDiv.textContent !== syllable) {
                      return;
                  }
                  await new Promise(resolve => setTimeout(resolve,250)); //protect against instant-answer bots destroying code
                  const syllableValue = milestone.syllable;
                  const lettersToCheck = [syllableValue];

                  // Filter the word list to only include words that contain the specified letters
                  wordlist = wordlist.map(word => word.toLowerCase());
                  const filteredUnsortedWordList = wordlist.filter(word =>
                      lettersToCheck.some(letter => word.includes(letter))
                  );
                
                  async function typeText(index) {
                    await new Promise(resolve => setTimeout(resolve, getRandomInt(450, 850)));
                    wordInput.value = ""
                    if (milestone.currentPlayerPeerId === selfPeerId) {
                        var i = index;
                        var txt = word;
                        console.log(word);
                
                        async function typeWriter() {
                            if (i < txt.length) {
                                wordInput.value += txt.charAt(i);
                                i++;
                                //console.log(wordInput.value);
                                socket.emit("setWord", wordInput.value, false);
                                await new Promise(resolve => setTimeout(resolve, getRandomInt(35, 150)));
                                await typeWriter();
                            }
                        }
                
                        await typeWriter();
                        console.log(wordInput.value);
                    }
                    
                    socket.emit("setWord", word, true);
                }

                  let filteredWordList = filteredUnsortedWordList

                  if (failsafe === false) {
                        if (currentSortMode === 1) {  // random
                            filteredWordList = filteredUnsortedWordList;
                            var word = filteredWordList[Math.ceil(Math.random() * filteredWordList.length)];
                            console.log("word reassigned")
                          }
                        if (currentSortMode === 2) {
                            filteredWordList = filteredUnsortedWordList.sort((a, b) => b.length - a.length);
                            var word = filteredWordList[0]; // longest
                            console.log("word reassigned")
                        } 
                        if (currentSortMode === 3) {
                            const filteredWordList = filteredUnsortedWordList.sort((a, b) => a.length - b.length);
                            var word = filteredWordList[0]; // shortest
                            console.log("word reassigned")                          
                        } 
                        if (currentSortMode === 4) {
                            if (checkbox15.checked) {
                              const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                              const Letters = milestone.playerStatesByPeerId[milestone.currentPlayerPeerId].bonusLetters;
                              let RemainingLetters = [];
                              for (let letter in Letters) {
                                  if (Letters[letter] === 1) {
                                      RemainingLetters.push(letter);
                                  }
                              }
                          
                              // Get 2 random items from RemainingLetters
                              const randomLetters = [];
                              while (randomLetters.length < 2) {
                                  const randomIndex = Math.floor(Math.random() * RemainingLetters.length);
                                  const randomLetter = RemainingLetters[randomIndex];
                                  randomLetters.push(randomLetter);
                                  RemainingLetters.splice(randomIndex, 1); // Remove the selected letter to prevent duplication
                              }
                          
                              // Separate array for words matching those 2 letters
                              const matchingWords = [];
                              for (const word of filteredUnsortedWordList) { // Assuming you have a wordList array containing your words
                                  if (word.includes(randomLetters[0]) && word.includes(randomLetters[1])) {
                                      matchingWords.push(word);
                                  }
                              }
                          
                             
                              if ( matchingWords.length > 0 ) {
                                const filteredWordList = matchingWords.sort((a, b) => b.length - a.length);
                                var word = filteredWordList[0]; // longest
                              } else {
                                const filteredWordList = filteredUnsortedWordList.sort((a, b) => b.length - a.length);
                                var word = filteredWordList[0]; // longest
                              }
                              console.log(matchingWords);
                          }                      
                        } 

                    
                      // first try! user choice
                      if (isHumanizerEnabled) {
                          sleep(getRandomInt(400, 800));                       
                      }
                      console.log(`found ${filteredWordList.length} words matching syllable ${syllableValue}`)
                      console.log(`your word is ${word}`)
                      
                      if (isAutoAnswerEnabled && isMasterEnabled == true) {
                        if (isHumanizerEnabled){
                          typeText(0);         
                        } else { // auto asnwer is on, but not humaizer, so answer immediately.
                           socket.emit("setWord", word, true);
                          statusLabel.textContent = "Status: Success!"
                        }            
                      }

                  } else  {
                      var word = filteredWordList[Math.ceil(Math.random() * filteredWordList.length/3)]; // random word in the shorter 3rd
                      if (isAutoAnswerEnabled) {
                          if (isHumanizerEnabled) {
                              sleep(getRandomInt(400, 800));
                              typeText(0);
                          }   else {
                            socket.emit("setWord", word, true);
                          }
                      }
                  } 

                  //console.log(`found ${filteredWordList.length} words matching syllable "${syllableValue}"`)
                  if (isAutoLeakEnabled) {
                      socket.emit("chat",word.trim())
                  }
                  if (isMasterEnabled === true) {

                      const worddisplay = document.querySelector(".dictionary");

                      worddisplay.textContent = "Prediction: " + word;
                      
                      const dictionarySpan = document.querySelector('.dictionary') // the same as the word display but is shorter :)
                      dictionarySpan.style.color = '#9142ff';
                      worddisplay.style.fontWeight = "bold";

                      //console.log(word);
                  } else {
                      document.querySelector('.dictionary').style.color = 'white';
                      document.querySelector('.dictionary').style.fontWeight = "normal";
                      document.querySelector('.dictionary').textContent = "English"
                  }
              } else {
                  console.log('Element with class "syllable" not found.');
              }
          });
  }
})();
