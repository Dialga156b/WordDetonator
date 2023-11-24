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

    // Adding Watermark Image
    const watermarkImage = document.createElement('img');
    watermarkImage.src = 'https://i.postimg.cc/X75Rdjw7/sai.png';
    watermarkImage.style.width = '50px';
    guiContainer.appendChild(watermarkImage);
    // the rest of the code.....
    // Adding Line Separator
    const separatorLine = document.createElement('hr');
    separatorLine.style.border = '1px solid white';
    separatorLine.style.marginTop = '10px';
    separatorLine.style.marginBottom = '10px';
    guiContainer.appendChild(separatorLine);

    // Adding Textbox
    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.placeholder = 'Edit Dictionary Link';
    textBox.style.width = '100%';
    guiContainer.appendChild(textBox);

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

    const checkboxContainer5 = document.createElement('div');
    guiContainer.appendChild(checkboxContainer5);


    const checkbox5 = document.createElement('input');
    checkbox5.type = 'checkbox';
    checkbox5.checked = true
    checkboxContainer5.appendChild(checkbox5);


    const label5 = document.createElement('label');
    label5.textContent = ' SearchType';
    label5.style.color = 'white';
    checkboxContainer5.appendChild(label5);

    const statusdiv = document.createElement('div');
    guiContainer.appendChild(statusdiv);

    const statusLabel = document.createElement('label');
    statusLabel.textContent = 'Status: ';
    statusLabel.style.color = 'white';
    guiContainer.appendChild(statusLabel);


    const modecont = document.createElement('div');
    guiContainer.appendChild(modecont);


    const ModeLbl = document.createElement('label');
    ModeLbl.textContent = ' Mode: Longest';
    ModeLbl.style.color = 'white';
    guiContainer.appendChild(ModeLbl);


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
    let searchMode = false;
    // Add event listener for Ctrl+K to toggle GUI visibility using keyup
    document.addEventListener('keyup', (event) => {
        if (event.ctrlKey && event.key === 'k') {
            toggleGUIVisibility();
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
        ModeLbl.textContent = ` Mode: ${searchMode ? 'Longest' : 'Shortest'}`;
    }

    // Add event listeners to checkboxes to update the status label
    checkbox1.addEventListener('change', updateStatusLabel);
    checkbox2.addEventListener('change', updateStatusLabel);
    checkbox3.addEventListener('change', updateStatusLabel);
    checkbox4.addEventListener('change', updateStatusLabel);
    checkbox5.addEventListener('change', updateStatusLabel);


    // Function to toggle the visibility of the GUI
    function toggleGUIVisibility() {
        guiContainer.style.display = (guiContainer.style.display === 'none') ? 'block' : 'none';
    }

    socket.on('nextTurn', function() {
        writeWord(false)
    });

    socket.on('failWord', function() {
        if (isAutoAnswerEnabled) {
            console.log("Failed:Retrying!")
            writeWord(true)
        }
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
        return clamp(Math.floor(Math.random() * max), min, max);
    }

    async function writeWord(failsafe) {
        wordInput.value = '';
        //milestone.syllable = syllable;
        //console.log(`Syllable:${milestone}`);
        //console.log(`~~~~~~~~~~~~~~~~~~~~~~`);
        let wordlist = [];
        let customURL = 'https://raw.githubusercontent.com/Kalaborative/JKLMBombpartyHelper/master/words.txt';//https://raw.githubusercontent.com/DO-Ui/bombparty-bot/master/wordlist.txt
        //console.log("nextturn!")
        if (textBox.textContent.length !== 0) {
            customURL = textBox.textContent;
        }
        fetch(`${customURL}`)
            .then(response => response.text())
            .then(data => {
                wordlist = data.split('\n');
            })
            .then(async () => {
                const syllableDiv = document.querySelector(".syllable");
                if (syllableDiv !== null) {
                    const syllableValue = syllableDiv.textContent;
                    const lettersToCheck = [syllableValue];

                    // Filter the word list to only include words that contain the specified letters
                    const filteredUnsortedWordList = wordlist.filter(word =>
                        lettersToCheck.some(letter => word.includes(letter))
                    );
                    // Sort the filtered word list in alphabetical orde

                    async function typeText(index) {
                        if (milestone.currentPlayerPeerId === selfPeerId) {
                            wordInput.focus(); // typing?? wowza
                             const textToType = `${word}`;
                             if (index === textToType.length) { // pesky typos
                                socket.emit("setWord", word, true);
                                // if (wordInput === textToType) {  
                                // } else {
                                //     wordInput.value = ""
                                //     index = 0
                                // }
                            }
                            // }
                            if (index < textToType.length) {
                                newString = wordInput.value += `${textToType.charAt(index)}`
                                wordInput.value = newString;
                                console.log(`${wordInput.value}`)
                                socket.emit("setWord", wordInput.value, false); //            // UPDATES THE CONTENT OF THE TEXTBOX!!! FALSE MEANS DOESNT SUBMIT
                                await sleep(Math.floor(Math.random() * 80) + 40);
                                typeText(index + 1); //setTimeout(function() {
                                //typeText(index + 1);
                                //},getRandomInt(80,200));
                            }
                            // if (index > textToType.length) { // pesky typos
                            //     //socket.emit("setWord", "", false);
                            //     wordInput.value = ""
                            //     await sleep(150);
                            //     index = 0
                            // }
                        }
                    }

                    let filteredWordList = filteredUnsortedWordList

                    if (failsafe === false) {

                        // first try! user choice

                        if (checkbox5.checked) { // sort by longest
                            filteredWordList = filteredUnsortedWordList.sort((a, b) => b.length - a.length);
                            var word = filteredWordList[0]; // longest
                        } else {
                            const filteredWordList = filteredUnsortedWordList.sort((a, b) => a.length - b.length);
                            var word = filteredWordList[0]; // longest
                        }
                    } 

                    if (failsafe === true) {
                        
                        // because it failed once, go for a random word.

                        var word = filteredWordList[Math.floor(Math.random() * filteredWordList.length/3)]; // random word in the shorter 3rd
                        if (isAutoAnswerEnabled) {
                            if (isHumanizerEnabled) {
                                sleep(getRandomInt(380, 500));
                                typeText(0);
                            }
                            //await sleep(word.length * 90);
                            //socket.emit("setWord", word, true);
                        }
                    } 

                    //console.log(`found ${filteredWordList.length} words matching syllable "${syllableValue}"`)
                    if (isAutoLeakEnabled) {
                        // chat the answer?
                    }
                    if (isMasterEnabled === true) {

                        const worddisplay = document.querySelector(".dictionary");

                        console.log(filteredWordList);

                        worddisplay.textContent = "Possible: " + word;

                        if (isAutoAnswerEnabled) {
                            if (isHumanizerEnabled) {
                                await sleep(getRandomInt(380, 500));
                                typeText(0);

                            }
                            //await sleep(word.length * 120);
                            //socket.emit("setWord", word, true);
                        }

                        const dictionarySpan = document.querySelector('.dictionary') // the same as the word display but is shorter :)
                        dictionarySpan.style.color = '#9142ff';
                        worddisplay.style.fontWeight = "bold";

                        console.log(word);
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
