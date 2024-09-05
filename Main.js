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

  var isDragging = false;
  guiContainer.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - guiContainer.getBoundingClientRect().left;
    offsetY = e.clientY - guiContainer.getBoundingClientRect().top;
  });

  window.addEventListener('mouseup', function() {
    isDragging = false;
  });

  window.addEventListener('mousemove', function(e) {
    if (isDragging) {
      guiContainer.style.left = e.clientX - offsetX + 'px';
      guiContainer.style.top = e.clientY - offsetY + 'px';
    }
  });

  const watermarkImage = document.createElement('img');
  watermarkImage.src = 'https://i.postimg.cc/X75Rdjw7/sai.png';
  watermarkImage.style.width = '50px';
  guiContainer.appendChild(watermarkImage);

  const label0 = document.createElement('label');
  label0.textContent = '   Summit English';
  label0.style.color = 'white';
  guiContainer.appendChild(label0);

  const separatorLine = document.createElement('hr');
  separatorLine.style.border = '1px solid white';
  separatorLine.style.marginTop = '10px';
  separatorLine.style.marginBottom = '10px';
  guiContainer.appendChild(separatorLine);

  const DictionaryLabel = document.createElement('label');
  DictionaryLabel.textContent = 'Default Dataset';
  DictionaryLabel.style.color = 'white';
  guiContainer.appendChild(DictionaryLabel);

  const gokys = document.createElement('div');
  guiContainer.appendChild(gokys);

  var button = document.createElement("button");
  button.textContent = "Dictionaries";
  button.className = "dropdown-button";
  guiContainer.appendChild(button);
  button.onclick = toggleDropdown;

  var dropdownContent = document.createElement("div");
  dropdownContent.className = "dropdown-content";
  dropdownContent.id = "myDropdown";
  dropdownContent.style.display = "none";

  var currentdictionary = 'https://raw.githubusercontent.com/DO-Ui/bombparty-bot/master/wordlist.txt';
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
      currentdictionary = links[items.indexOf(itemText)];
      DictionaryLabel.textContent = itemText;
    };
    const itemtxt = item.textContent;
    item.onmouseover = function() {
      item.textContent = '-> ' + itemtxt;
    };
    item.onmouseleave = function() {
      item.textContent = itemtxt;
    };
    dropdownContent.appendChild(item);
  });

  guiContainer.appendChild(dropdownContent);

  function toggleDropdown() {
    dropdownContent.style.display = (dropdownContent.style.display === "none") ? "block" : "none";
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
      dropdownContent.style.display = "none";
    }
  };

  const hoohaah = document.createElement('div');
  guiContainer.appendChild(hoohaah);

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

  const STseparatorLine = document.createElement('hr');
  STseparatorLine.style.border = '1px solid white';
  STseparatorLine.style.marginTop = '10px';
  STseparatorLine.style.marginBottom = '10px';
  guiContainer.appendChild(STseparatorLine);

  const SearchtypesLabel = document.createElement('label');
  SearchtypesLabel.textContent = '-SearchTypes-';
  SearchtypesLabel.style.color = 'white';
  guiContainer.appendChild(SearchtypesLabel);

  const yetanotherdiv = document.createElement('div');
  guiContainer.appendChild(yetanotherdiv);

  const checkbox5 = document.createElement('input');
  checkbox5.type = 'checkbox';
  checkbox5.checked = true;
  guiContainer.appendChild(checkbox5);

  const label5 = document.createElement('label');
  label5.textContent = ' Random';
  label5.style.color = 'white';
  guiContainer.appendChild(label5);

  const longestdiv = document.createElement('div');
  guiContainer.appendChild(longestdiv);

  const checkbox6 = document.createElement('input');
  checkbox6.type = 'checkbox';
  guiContainer.appendChild(checkbox6);

  const label6 = document.createElement('label');
  label6.textContent = ' Longest';
  label6.style.color = 'white';
  guiContainer.appendChild(label6);

  const shortestdiv = document.createElement('div');
  guiContainer.appendChild(shortestdiv);

  const checkbox7 = document.createElement('input');
  checkbox7.type = 'checkbox';
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
  watermark2.textContent = 'Summit [ Dialga156 ]';
  watermark2.style.color = 'white';
  watermarkContainer2.appendChild(watermark2);

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Shift') {
      if (guiContainer.style.display === 'none') {
        guiContainer.style.display = 'block';
      } else {
        guiContainer.style.display = 'none';
      }
    }
  });

  const wordInput = document.querySelector('input[name="word"]');

  let currentSortMode = 1;
  let isMasterEnabled = false;
  let isAutoAnswerEnabled = false;
  let isAutoJoinEnabled = false;

  checkbox1.addEventListener('change', function() {
    isMasterEnabled = checkbox1.checked;
    statusLabel.textContent = isMasterEnabled ? "Status: Enabled" : "Status: OFF";
  });

  checkbox2.addEventListener('change', function() {
    isAutoAnswerEnabled = checkbox2.checked;
  });

  checkbox14.addEventListener('change', function() {
    isAutoJoinEnabled = checkbox14.checked;
  });

  checkbox5.addEventListener('change', function() {
    if (checkbox5.checked) {
      currentSortMode = 1;
      checkbox6.checked = false;
      checkbox7.checked = false;
      checkbox15.checked = false;
    }
  });

  checkbox6.addEventListener('change', function() {
    if (checkbox6.checked) {
      currentSortMode = 2;
      checkbox5.checked = false;
      checkbox7.checked = false;
      checkbox15.checked = false;
    }
  });

  checkbox7.addEventListener('change', function() {
    if (checkbox7.checked) {
      currentSortMode = 3;
      checkbox5.checked = false;
      checkbox6.checked = false;
      checkbox15.checked = false;
    }
  });

  checkbox15.addEventListener('change', function() {
    if (checkbox15.checked) {
      currentSortMode = 4;
      checkbox5.checked = false;
      checkbox6.checked = false;
      checkbox7.checked = false;
    }
  });

})();
