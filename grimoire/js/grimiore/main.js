const main = () => {
  Console.WriteLine("Do you believe in magic?");
  Console.WriteLine("------------------------");

  const allSpells = GetAllSpells();
  const goodBook = MakeGoodSpellBook(allSpells);
  const evilBook = MakeEvilSpellBook(allSpells);

  DisplaySpellBook(goodBook);
  Console.WriteLine();
  DisplaySpellBook(evilBook);

  const DisplaySpellBook = (book) => {
    Console.WriteLine(book.Title);
    for (let aSpell of book.Spells)
    {
        Console.WriteLine(aSpell.Name);
    }
  }
  const MakeEvilSpellBook = (allSpells) => {
    const evilBook = new SpellBook();
    evilBook.Title = "Evil Book";
    evilBook.Spells = allSpells.filter(spell => spell.IsEvil).ToList();
    return evilBook;
  }

  const MakeGoodSpellBook = (allSpells) => {
    const goodBook = new SpellBook();
    goodBook.Title = "Good Book";
    goodBook.Spells = allSpells.filter(spell => !spell.IsEvil).ToList();
    return goodBook;
  }
  const GetAllSpells = () => {
    const allSpells = [
      {
          Name = "Turn enemy into a newt",
          IsEvil = true,
          EnergyReqired = 5.1
      },
      {
          Name = "Conjure some gold for a local charity",
          IsEvil = false,
          EnergyReqired = 2.99
      },
      {
          Name = "Give a deaf person the ability to heal",
          IsEvil = false,
          EnergyReqired = 12.2
      },
      {
          Name = "Make yourself emperor of the universe",
          IsEvil = true,
          EnergyReqired = 100.0
      },
      {
          Name = "Convince your relatives your political views are correct",
          IsEvil = false,
          EnergyReqired = 2921.5
      }
    ];
    return allSpells;
  }
  

}

main();