import React from "react";

/**
 * How do we add a new base element to React's JSX?
 *
 * You'll need to do some detective work: check
 * out JSX.IntrinsicElements.
 *
 * The JSX namespace comes from React - you'll need
 * to check out React's type definitions.
 */
declare global {
	namespace JSX {
		interface IntrinsicElements {
			"custom-element": {
				children?: React.ReactNode;
				//* Bonus points if you can make the <custom-element> have required props!
				requiredProp: string;
			};
		}
	}
}

const element = <custom-element requiredProp="wow">hello world</custom-element>;
//@ts-expect-error
const element2 = <custom-element>hello world</custom-element>;
