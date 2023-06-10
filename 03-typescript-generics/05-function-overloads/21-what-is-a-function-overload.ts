/**
 * This time, let's solve this with function overloads!
 */
function returnWhatIPassIn(t: 1): 1;
function returnWhatIPassIn(t: "matt"): "matt";
function returnWhatIPassIn(t: unknown) {
	return t;
}

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");
