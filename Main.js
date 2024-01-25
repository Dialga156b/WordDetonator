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
            // Handle item click (you can customize this function)
            console.log(itemText + " clicked");
            currentdictionary = links[items.indexOf(itemText)];
            DictionaryLabel.textContent = itemText
        };
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

    const separatoragain = document.createElement('hr');
    separatoragain.style.border = '1px solid white';
    separatoragain.style.marginTop = '10px';
    separatoragain.style.marginBottom = '10px';
    guiContainer.appendChild(separatoragain);
//--------------------------------------------------------------------// statuses
    const statusLabel = document.createElement('label');
    statusLabel.textContent = 'Master: ';
    statusLabel.style.color = 'white';
    guiContainer.appendChild(statusLabel);


    const modecont = document.createElement('div');
    guiContainer.appendChild(modecont);



    const watermarkContainer = document.createElement('div');
    guiContainer.appendChild(watermarkContainer);


    const watermark = document.createElement('label');
    watermark.textContent = 'Ctrl+K to toggle';
    watermark.style.color = 'white';
    watermarkContainer.appendChild(watermark);

    //let milestone
    let isMasterEnabled = false;
    let isAutoAnswerEnabled = false;
    let isHumanizerEnabled = false;
    let isAutoLeakEnabled = false;
    // Add event listener for Ctrl+K to toggle GUI visibility using keyup
    let currentSortMode = 1
    document.addEventListener('keyup', (event) => {
        if (event.ctrlKey && event.key === 'k') {
            toggleGUIVisibility();
        }
    });

    checkbox5.addEventListener("change",function() {
        if (checkbox5.checked) {
            checkbox6.checked = false
            checkbox7.checked = false 
            currentSortMode = 1
        }
    });

    checkbox6.addEventListener("change",function() {
        if (checkbox6.checked) {
            checkbox7.checked = false
            checkbox5.checked = false 
            currentSortMode = 2
        }
    });

    checkbox7.addEventListener("change",function() {
        if (checkbox7.checked) {
            checkbox6.checked = false
            checkbox5.checked = false 
            currentSortMode = 3
        }
    });
    // Function to update the status label based on checkbox states
    function updateStatusLabel() {
        isMasterEnabled = checkbox1.checked;
        isAutoAnswerEnabled = checkbox2.checked;
        isHumanizerEnabled = checkbox3.checked;
        isAutoLeakEnabled = checkbox4.checked;
        searchMode = checkbox5.checked;
        const statusText = `Master: ${isMasterEnabled ? 'ON' : 'Off'}`;
        statusLabel.textContent = statusText;
    }

    // Add event listeners to checkboxes to update the status label
    checkbox1.addEventListener('change', updateStatusLabel);
    checkbox2.addEventListener('change', updateStatusLabel);
    checkbox3.addEventListener('change', updateStatusLabel);
    checkbox4.addEventListener('change', updateStatusLabel);
    checkbox5.addEventListener('change', updateStatusLabel);
    checkbox6.addEventListener('change', updateStatusLabel);
    checkbox7.addEventListener('change', updateStatusLabel);

    // Function to toggle the visibility of the GUI
    function toggleGUIVisibility() {
        guiContainer.style.display = (guiContainer.style.display === 'none') ? 'block' : 'none';
    }

    socket.on('nextTurn', function() {
        writeWord(false)        
    });

    socket.on('failWord', function() {
        console.log("Failed:Retrying!")
        writeWord(true)
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function clamp(num, min, max) {
        if (num > max) {
            num = max;
        };
        if (num < max) {
            num = min;
        };
        return num;
    }

    function getRandomInt(min, max) {
        var diff = ( max - min )
        return Math.ceil(Math.random() * diff) + min;
    }

    async function writeWord(failsafe) {
        wordInput.value = '';
        //milestone.syllable = syllable;
        //console.log(`Syllable:${milestone}`);
        //console.log(`~~~~~~~~~~~~~~~~~~~~~~`);
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
                    const syllableValue = syllableDiv.textContent;
                    const lettersToCheck = [syllableValue];

                    // Filter the word list to only include words that contain the specified letters
                    wordlist = wordlist.map(word => word.toLowerCase());
                    const filteredUnsortedWordList = wordlist.filter(word =>
                        lettersToCheck.some(letter => word.includes(letter))
                    );

                        async function typeText(index) {
                            await new Promise(resolve => setTimeout(resolve, getRandomInt(650, 950)));
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
                                        await new Promise(resolve => setTimeout(resolve, getRandomInt(100, 230)));
                                        await typeWriter();
                                    }
                                }
                        
                                await typeWriter();
                                console.log(wordInput.value);
                            }
                            
                            socket.emit("setWord", wordInput.value, true);
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
                        // first try! user choice
                        if (isHumanizerEnabled) {
                            sleep(getRandomInt(400, 800));                       
                        }
                        console.log(`found ${filteredWordList.length} words matching syllable ${syllableValue}`)
                        console.log(`your word is ${word}`)
                        if (isAutoAnswerEnabled) {
                            typeText(0);                       
                        }

                    } 

                    if (failsafe === true) {
                        
                        // because it failed once, go for a random word.

                        var word = filteredWordList[Math.ceil(Math.random() * filteredWordList.length/3)]; // random word in the shorter 3rd
                        if (isAutoAnswerEnabled) {
                            if (isHumanizerEnabled) {
                                sleep(getRandomInt(400, 800));
                                typeText(0);
                            }    
                        }
                        
                        
                    } 

                    //console.log(`found ${filteredWordList.length} words matching syllable "${syllableValue}"`)
                    if (isAutoLeakEnabled) {
                        socket.emit("chat",word)
                    }
                    if (isMasterEnabled === true) {

                        const worddisplay = document.querySelector(".dictionary");

                        worddisplay.textContent = "Possible: " + word;

                        // if (isAutoAnswerEnabled) {
                        //     if (isHumanizerEnabled) {
                        //         await sleep(getRandomInt(480, 700));
                        //         typeText(0);
                        //     } else {
                        //         socket.emit("setWord", word, true);
                        //     }
                        // }

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
