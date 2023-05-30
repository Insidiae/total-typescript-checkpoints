export class Component<TProps> {
	private props: TProps;

	constructor(props: TProps) {
		this.props = props;
	}

	getProps = () => this.props;
}

function cloneComponent<TProps>(component: Component<TProps>) {
	return new Component(component.getProps());
}
