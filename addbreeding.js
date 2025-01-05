const fs = require('fs');

// Read the monsterData.json file
fs.readFile('monsterData.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse the JSON data
  const monsters = JSON.parse(data);

  // Define the default breeding structure
  const defaultBreeding = {
    "pedigreeFamily": "",
    "secondaryFamily": "",
    "pedigreeOverrides": [""],
    "secondaryOverrides": [""],
    "specificParents": [
      {
        "pedigreeOptions": [],
        "secondaryOptions": []
      },
      {
        "pedigree": "",
        "secondary": ""
      }
    ]
  };

  // Add the breeding property to each monster
  monsters.forEach(monster => {
    if (!monster.breeding) {
      monster.breeding = defaultBreeding;
    }
  });

  // Convert the updated monsters back to JSON format
  const updatedData = JSON.stringify(monsters, null, 2);

  // Write the updated JSON back to the file
  fs.writeFile('monsterData.json', updatedData, 'utf8', err => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Updated monster data successfully!");
  });
});
