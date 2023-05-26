type YouSayGoodbyeAndISayHello<Message> = Message extends "hello"
	? "goodbye"
	: "hello";
