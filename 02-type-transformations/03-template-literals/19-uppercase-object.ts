type Event = `log_in` | "log_out" | "sign_up";

type ObjectOfKeys = Record<Uppercase<Event>, string>;

// Or:

// type ObjectOfKeys = {
//   [Key in Uppercase<Event>]: string;
// };
