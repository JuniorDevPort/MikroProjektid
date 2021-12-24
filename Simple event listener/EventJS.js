const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent = `${e.code}`;

  if(log.textContent == 'Space'){
    console.log("works");
    console.log('aww', log.textContent);
    
  } else if(log.textContent != 'Space') {
    console.log("not works");
    console.log('bzz', log.textContent);
  }
}

/*probleemi olemus on see, et pole kirjas järgmist sammu. Selleks on siis probleemi püstitus.
Probleem on, et tahan võtta window add eventlisteneri ja selle siduda nupuvajutusega.
Küsimus -- kas saan ühendada if tingimusega eventlisteneri ja mingi konkreetse nupu väärtuse?
Selleks luua uus aken ja testida väikseima võimaliku lahendusena.
*/

//nii, kuhu ma jõudsin. Ma sain niikaugele, et kui vajutan nupule, siis saan tingimuse alusel määrata tagajärgi. nüüd peaksin siduma  UP nupuks
//ühe väärtuse ja selle siis siduma 
//märksõnad: addEventListener, Siin on näha loogikat, et ma võtan HTML elemendi ID kaudu ja lisan addEventListeneri. 

/* addEventListener käib koos even käib, nagu click ja keydown. need võiks meelde jätta. 
