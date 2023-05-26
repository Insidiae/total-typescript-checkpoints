const parser1 = {
	parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
	extract: () => true,
};

// type GetParserResult<Parser> = Parser extends { parse: () => infer Result }
// 	? Result
// 	: Parser extends () => infer Result
// 	? Result
// 	: Parser extends { extract: () => infer Result }
// 	? Result
// 	: never;

// Or:

type GetParserResult<Parser> = Parser extends
	| { parse: () => infer Result }
	| (() => infer Result)
	| { extract: () => infer Result }
	? Result
	: never;
