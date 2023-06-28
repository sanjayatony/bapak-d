type Props = {
	title: string;
};
export default function HeadingHighlight({ title }: Props) {
	return (
		<div className="relative inline-block">
			<div className="absolute inset-0 bg-yellow-200 h-5 my-auto transform -rotate-6 top-6"></div>
			<h2 className="relative z-10 px-4">{title}</h2>
		</div>
	);
}
