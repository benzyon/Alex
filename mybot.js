const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("Family $200")) {
    message.channel.send("```Does your character have siblings? How many do they have? If they don’t have any, do they want to have siblings?```");
  }
});

client.on("message", (message) => {
    if (message.content.startsWith("Family $400")) {
      message.channel.send("```What are your character's Parents names? Do they have parents? If not, what happened to them? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Family $600")) {
      message.channel.send(" ``` Is there anyone your character isn’t related to that they treat like family?```");
    }
  });
  client.on("message", (message) => {
    if (message.content.startsWith("Family $800")) {
      message.channel.send("```What other family does your character have that aren't siblings or parents? If none, what family roll would fit them best?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Family $1000")) {
      message.channel.send(" ``` What does your character think about having a family of their own? Would they adopt, try and have their own kids, never hook up with anyone, not have any kids but have a partner?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $200")) {
      message.channel.send("```Does your character believe in a religion? If not, why? If you just don’t give your characters a religious belief, feel free not to answer or say why you don’t.```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $400")) {
      message.channel.send("```What’s your character's alignment like? Are they chaotic, good, evil, lawful? What kind of justice do they believe in? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $600")) {
      message.channel.send("``` What is your character's views on death and killing/murder?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $800")) {
      message.channel.send("``` How honest are they with their thoughts and feelings? Do they hide who they really are or do they show the world? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Beliefs $1000")) {
      message.channel.send("```What sort of society does the character thinks works best? one where everyone gets the same, one where one person rules over everyone, people get what they work for, free for all, they don’t have any interest for that sort of thing? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $200")) {
      message.channel.send("```Does your character have any friends or are they in it alone?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $400")) {
      message.channel.send(" ```Is there a side character that carries the main character through the story? Or can they make it on their own? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $600")) {
      message.channel.send(" ```Do your side characters have families or parents? Tell us a little about them. ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $800")) {
      message.channel.send("``` How did your character meet one or two of the side characters or all if you have many that you want to share? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Side Characters $1000")) {
      message.channel.send("``` Who is your favorite side character and which side character do you like the least? You can still like them but you like everyone else more. ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villains $200")) {
      message.channel.send("```Who or what is the main villain? Is it a man/woman, internal conflict, society? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villains $400")) {
      message.channel.send(" ``` What is the Villain's goal or what is the problem for the main character, be more specific.```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villains $600")) {
      message.channel.send(" ```What does the character have to overcome to be able to beat the villain[ s]  of the story? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villains $800")) {
      message.channel.send("``` What sort of connections does your villain have? Do they have someone they care about? If not what is their weak point? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Villains $1000")) {
      message.channel.send(" ``` Would your character live long enough to become the villain? Would their friends let them become the bad guy? Would they try and stop themselves?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $200")) {
      message.channel.send("```Does your character live a normal life? What kind of life do they want to live?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $400")) {
      message.channel.send(" ```What kind of area does your character live in? What are the people, if any like? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $600")) {
      message.channel.send(" ``` What is your character's current job/major? what is their dream job?```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $800")) {
      message.channel.send("``` What does your character like to do on their days off or when they have time to themselves? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Daily Life $1000")) {
      message.channel.send("```Who are the characters friends or what kind of group of people does your character prefer to hang out with?  ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $200")) {
      message.channel.send("```What is something your character likes to do when no one is home/looking? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $400")) {
      message.channel.send("``` What is your character afraid of that they would never readily tell someone? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $600")) {
      message.channel.send("``` Does your character dream? If so what are their dreams about? If not, what do they fantasize about? ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $800")) {
      message.channel.send("```What superstitions does your character believe in?  ```");
    }
  });
  
  client.on("message", (message) => {
    if (message.content.startsWith("Quirks $1000")) {
      message.channel.send("``` Does your character have an odd habit? If not, what is something your character is insecure about? ```");
    }
  });

  

//green board




client.on("message", (message) => {
  if (message.content.startsWith("Setting $200")) {
    message.channel.send("``` Where does the story take place? What are the names? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Setting $400")) {
    message.channel.send(" ``` Had your character always lived where they are? If not, where did they move from? Do they like home better or where they are now?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Setting $600")) {
    message.channel.send(" ``` What are some of the defining landmarks to the character? If they travel do they use maps or do they know the way?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Setting $800")) {
    message.channel.send("``` Where is your character’s favorite place to go?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Setting $1000")) {
    message.channel.send(" ``` What is the weather like in that area? What season is it right now? Do they like the weather or do they hate it?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $200")) {
    message.channel.send("``` Does your character have a love interest? How did they meet? If not do they have any pets? Do they want any?```");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $400")) {
    message.channel.send("```What is your character's sexuality? Do they like girls, guys, neither, other? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $600")) {
    message.channel.send("``` What does your character look for in a partner? If they aren't interested in What is something your character likes to do when no one is home/looking?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $800")) {
    message.channel.send(" ``` What would be your characters ideal date?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Love Interests $1000")) {
    message.channel.send("``` How comfortable is your character with themselves and or with their partner? Do they keep secrets or are they an open book?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $200")) {
    message.channel.send("``` What is the driving point that started the story or the inciting incident?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $400")) {
    message.channel.send("```What is the first challenge of the story? How do they overcome it?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $600")) {
    message.channel.send("```What happens in the middle of the story? Is it exciting, hard to write, boring, fun, unsure?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $800")) {
    message.channel.send("```What is the climax of the story?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Plot $1000")) {
    message.channel.send("```What is the resolution of the story/epilogue?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $200")) {
    message.channel.send("``` Who in their family does your character most admire? If no one, who do they admire?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $400")) {
    message.channel.send("``` Who in their family do they feel closest to? If they have no family, who are they closest to?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $600")) {
    message.channel.send("```Does your character hate their family members? Is it a specific one? Who do they dislike the most if they don’t hate someone?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $800")) {
    message.channel.send("```If they had a kid, what would they be like?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Family 2 $1000")) {
    message.channel.send("```How would your character react to losing someone they care about? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $200")) {
    message.channel.send("``` What is a part of your characters back story, no more than a year before the story starts?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $400")) {
    message.channel.send("``` What sort of childhood did your character have? If they are still a child, what is it like?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $600")) {
    message.channel.send(" ```Did something tragic happen in their past? Was it mentally scarring? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $800")) {
    message.channel.send(" ``` What is something good that happened to them in the past that they look back and smile about?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Backstory $1000")) {
    message.channel.send("``` If they could change any part of something that happened in the past, would they and what would it be? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $200")) {
    message.channel.send("```What do they carry in their pockets/bag?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $400")) {
    message.channel.send("``` Are they a heavy sleeper or a light sleeper? How do people wake them up?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $600")) {
    message.channel.send(" ``` What is a pet peeve of theirs? How do they react when someone does it?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $800")) {
    message.channel.send(" ```If they could have a pet, what kind of pet would they want? If they have pets, what pets do they have? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details $1000")) {
    message.channel.send(" ```What talents does your character have? ```");
  }
});


//red board




client.on("message", (message) => {
  if (message.content.startsWith("Appearance $200")) {
    message.channel.send(" ``` What is their hair, skin, and eye color? Do they dye their hair? Do they wear colored contacts? Do they wear glasses?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Appearance $400")) {
    message.channel.send("``` What is their typical outfit that they wear? Do they have other reasons for wearing it other than that they like how it looks?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Appearance $600")) {
    message.channel.send(" ```How tall and how much does your character weigh? What kind of build or body type to they have? How old are they? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Appearance $800")) {
    message.channel.send("``` What do they wear when they got to bed, go to a formal event, go out with friends, and when they are just staying home? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Appearance $1000")) {
    message.channel.send("``` Do they have any defining scars, tattoos, or other not common features about them?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Personality $200")) {
    message.channel.send("```Are they a fighter or more passive characters? What would push them far enough to get in a fight?```");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Personality $400")) {
    message.channel.send("```Are they more optimistic or pessimistic? Was there something that made them that way? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Personality $600")) {
    message.channel.send("```What three words best describe their personality?Are they generally introverted or extroverted? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Personality $800")) {
    message.channel.send("``` Do they tend to argue with people, or avoid conflict? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Personality $1000")) {
    message.channel.send("``` If they could change one thing about themself, what would it be? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("World building $200")) {
    message.channel.send("```What is the world like if it's not earth? does it have multiple biomes? Does it only have one main one? If it is earth, what’s the area they are in like?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("World building $400")) {
    message.channel.send("```What level of technology is used? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("World building $600")) {
    message.channel.send("```What are the typical pastimes of the people living in the area? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("World building $800")) {
    message.channel.send("```Are there any prejudices in the world? What about in the area? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("World building $1000")) {
    message.channel.send("```What is the Legal system like? Do they believe in the death sentence? What rules are they relaxed on and what rules are they strict on? ```  ");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("In Society $200")) {
    message.channel.send("``` Do they like interacting with large groups of people? Why or why not?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("In Society $400")) {
    message.channel.send("```Do they tend to take on leadership roles in social situations? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("In Society $600")) {
    message.channel.send("```What is their idea of good entertainment (consider music, movies, art, etc.)? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("In Society $800")) {
    message.channel.send("```To which social class do they belong? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("In Society $1000")) {
    message.channel.send("```Do you have a criminal record of any kind? What are some of the things on it if they do?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Abilities/Powers $200")) {
    message.channel.send("```Does your character have any special powers or abilities? What about something they are very good at? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Abilities/Powers $400")) {
    message.channel.send("```How many characters know of your character’s special abilities or their talents? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Abilities/Powers $600")) {
    message.channel.send("```How did they get their powers or talents? Did something happen, were they born with it, did they teach themselves  or did someone teach them? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Abilities/Powers $800")) {
    message.channel.send(" ```If they have super powers, do they hate them? What do they feel about them? If they dont, Whats a superpower they would want to have? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Abilities/Powers $1000")) {
    message.channel.send("```What is their weakness? Is it personal? Is it physical? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Growing up $200")) {
    message.channel.send("```What social class did they have grow up in [0-16] and what Social class are they  in now? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Growing up $400")) {
    message.channel.send("```How much schooling did they have? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Growing up $600")) {
    message.channel.send("```How would they describe their childhood in general? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Growing up $800")) {
    message.channel.send("```Did they have any role models growing up? What were they like or why didn't they? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Growing up $1000")) {
    message.channel.send(" ```What kind of friends did they have growing up? ```");
  }
});




//Purple board




client.on("message", (message) => {
  if (message.content.startsWith("Social Situation $200")) {
    message.channel.send("```Do they believe in doing nice things for strangers when they won’t get anything in return?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Social Situation $400")) {
    message.channel.send("```Do they argue with people over topics they disagree with? Or do they let them have their way?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Social Situation $600")) {
    message.channel.send("```How do they react to meeting someone new? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Social Situation $800")) {
    message.channel.send("```When interacting with elders/superiors, do they automatically treat them with respect? Or do they view respect as something that has to be earned not just by age or rank? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Social Situation $1000")) {
    message.channel.send("```How do they interact with those younger or lower ranking than them?  Are they good with children? ``");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Favorites $200")) {
    message.channel.send("```Does your character have a favorite food? What is it? Is there any particular reason why they like it so much? ```");
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Favorites $400")) {
    message.channel.send("```Does your character have a favorite color? What is it and why? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Favorites $600")) {
    message.channel.send("```Favorite music to listen to, if any? Why? Or what do you think their theme song would be? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Favorites $800")) {
    message.channel.send("```Where is there favorite place? Have they been there or only heard about it/imagined it? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Favorites $1000")) {
    message.channel.send("```What is their favorite pass time? Is there anyone they like spending it with? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details 2 $200")) {
    message.channel.send("```Are they generally organized or messy? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details 2 $400")) {
    message.channel.send("``` Name three things they consider themselves to be very good at.```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details 2 $600")) {
    message.channel.send("``` Three things they consider themselves to be very bad at.```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details 2 $800")) {
    message.channel.send("``` What three words would others probably use to describe them? And what Three words would they use to describe themselves ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Simple Details 2 $1000")) {
    message.channel.send("``` What does their room look like? Is it messy or clear? What can you find in it?``` ");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Bad Times $200")) {
    message.channel.send("``` How do they deal with stress?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Bad Times $400")) {
    message.channel.send("``` What, if anything, shocks or offends them?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Bad Times $600")) {
    message.channel.send("``` What is their greatest fear?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Bad Times $800")) {
    message.channel.send("```What's the worst thing that could happen to them right now? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Bad Times $1000")) {
    message.channel.send("``` How to they handle depressing and sad situations?``");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Nit Picky $200")) {
    message.channel.send("```How do they like their food? Are they a picky eater? Will they eat anything?  ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Nit Picky $400")) {
    message.channel.send("```What kind of allergies or other physical ailments do they have? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Nit Picky $600")) {
    message.channel.send("``` What tone is their voice? Is it high? Low? Do you have a voice reference?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Nit Picky $800")) {
    message.channel.send("``` Do they sing in the shower? Are they a morning person or a night person? Do they like rainy days or sunny ones?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Nit Picky $1000")) {
    message.channel.send("``` What is their blood type? Or What is their shoe size?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Edgy $200")) {
    message.channel.send("```What is one of the most high risk things they have ever done? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Edgy $400")) {
    message.channel.send("``` Who or what, if anything, would they die for (or otherwise go to extremes for)?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Edgy $600")) {
    message.channel.send("``` Do they smoke, drink, or use drugs? If so, why? Do they want to quit? ```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Edgy $800")) {
    message.channel.send("``` Who do they trust with their secrets if anyone?```");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Edgy $1000")) {
    message.channel.send("```Who is the person they despise the most, and why? ```");
  }
});
  
client.login(process.env.BOT_TOKEN);
