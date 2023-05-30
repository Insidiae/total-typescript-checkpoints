export class Component<Props> {
	private props: Props;

	constructor(props: Props) {
		this.props = props;
	}

	getProps = () => this.props;
}
