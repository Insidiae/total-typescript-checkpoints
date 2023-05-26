type YouSayGoodbyeAndISayHello<Message> = Message extends "hello"
	? "goodbye"
	: Message extends "goodbye"
	? "hello"
	: never;
