type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

// type ObjectOfKeys = {
// 	[Key in TemplateLiteralKey]: string;
// };

// Or:

type ObjectOfKeys = Record<TemplateLiteralKey, string>;
