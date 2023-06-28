import HeadShot from "@/components/headShot";

export default function Footer() {
	return (
		<footer className="mt-32 py-12 max-w-prose mx-auto text-center group">
			<section className="[&>svg]:w-64 [&>svg]:h-64 [&>svg]:mx-auto group-hover:[&>svg]:rotate-6 transition duration-75 ease-in-out">
				<HeadShot />
			</section>
			<section className="relative -mt-10">
				<div className="absolute inset-0 h-24 my-auto bg-fuchsia-200"></div>
				<div className="z-10 relative transform -rotate-2">
					<h2 className="font-bold text-3xl mb-4 font-space">Bapak D. Ev</h2>
					<p className="text-sm px-12 font-jet">
						Dad with over 10 years of experience as a web developer, specializing in WordPress, Next.js, Astro, and Tailwind CSS. Since 2015, I have been
						successfully working remotely, embracing the flexibility and freedom it offers.
					</p>
				</div>
			</section>
		</footer>
	);
}
