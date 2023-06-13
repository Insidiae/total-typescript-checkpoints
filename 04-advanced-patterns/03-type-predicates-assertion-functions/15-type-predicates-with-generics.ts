import { isBodyElement, isDivElement } from "../fake-external-lib";

/**
 * By changing the type definition of this interface,
 * you can fix all the errors below.
 */
interface DOMNodeExtractorConfig<T, Result> {
	isNode: (node: unknown) => node is T;
	transform: (node: T) => Result;
}

const createDOMNodeExtractor = <T, TResult>(
	config: DOMNodeExtractorConfig<T, TResult>
) => {
	return (nodes: unknown[]): TResult[] => {
		return nodes.filter(config.isNode).map(config.transform);
	};
};

//* Should pick up that "extractDivs" is of type "HTMLDivElement[]"
const extractDivs = createDOMNodeExtractor({
	isNode: isDivElement,
	transform: (div) => {
		return div.innerText;
	},
});

const divs = extractDivs([document.createElement("div")]);

//* Should pick up that "extractBodies" is of type "HTMLBodyElement[]"
const extractBodies = createDOMNodeExtractor({
	isNode: isBodyElement,
	transform: (body) => {
		return body.bgColor;
	},
});

const bodies = extractBodies([document.createElement("body")]);
