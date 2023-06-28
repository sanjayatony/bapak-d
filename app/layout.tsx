import Header from "@/components/header";
import Footer from "@/components/footer";
export const metadata = {
	title: "Bapak D. Ev",
	description:
		"Dad with over 10 years of experience as a web developer, specializing in WordPress, Next.js, Astro, and Tailwind CSS. Since 2015, I have been successfully working remotely, embracing the flexibility and freedom it offers.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="font-sans pt-8">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
