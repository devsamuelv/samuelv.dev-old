import { NextApiRequest, NextApiResponse } from "next";

const messages = (req: NextApiRequest, res: NextApiResponse) => {
	res.send({
		messages: [
			"so i cant go into our house until sam gets on great",
			"can u ggive me permission to enter our houser",
			"i got kicked for unfair advantage cus i tried to fly",
			"are elytras gonna be fixed eventually",
			"thats an interesting update",
			"CreWn I know you can see this chat log",
			"now that I exist once more you will all fear me totally",
			"I am very intimidating with my pug skin",
			"This is not an anarchy server",
			"you have a relationship with that horse?",
			"tho transport is that big thing which is why i havent brought any over",
			"Virtual machine!",
			"HAWK 233!",
			"scallions",
			"WHO STARTED A FOREST FIRE!?",
			"I just found a very small island with like 50 horses on it",
			"Do u know where Sam's base is?",
			"TAKE ME OUT OF SPECTATOR!",
			"or us cousion?",
			"I'm sowwy :(",
			"Ur base in no more",
		],
	});
};

export default messages;
