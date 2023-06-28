import Link from "next/link";
import { reader } from "./reader";
import HeadShot from "@/components/headShot";
import HeadingHighlight from "@/components/headingHighlight";
import "./styles.css";

export default async function Homepage() {
	const posts = await reader.collections.posts.all();

	return (
		<>
			<main className="px-4 prose prose-stone mx-auto home">
				<section className="p-6 stack-sm border-2 border-black mb-12 bg-pink-200 font-jet prose-p:m-0">
					<p>
						I am a father with over 10 years of experience as a web developer, specializing in{" "}
						<a
							href="https://wordpress.org"
							target="_blank"
						>
							WordPress
						</a>
						,{" "}
						<a
							href="https://nextjs.org"
							target="_blank"
						>
							Next.js
						</a>
						,{" "}
						<a
							href="https://astro.build"
							target="_blank"
						>
							Astro
						</a>
						, and{" "}
						<a
							href="https://tailwindcss.com"
							target="_blank"
						>
							Tailwind CSS
						</a>
						. Since 2015, I have been successfully working remotely, embracing the flexibility and freedom it offers.
					</p>
				</section>
				<section>
					<HeadingHighlight title="Stacks" />
					<p>
						As a web developer, my commitment lies in creating exceptional user experiences. I leverage my expertise to build robust and visually appealing web
						applications using WordPress, Next.js, Astro, and Tailwind CSS. These technologies enable me to develop responsive and efficient designs, ensuring
						that every website I create is both visually captivating and functionally powerful.
					</p>

					<HeadingHighlight title="Remote Working" />
					<p>
						In addition to my technical skills, I strongly believe in the advantages of remote work. It allows me to optimize productivity and strike a healthy
						work-life balance. Collaborating seamlessly with clients and team members from anywhere in the world, I utilize modern communication tools to
						deliver outstanding results.
					</p>
					<HeadingHighlight title="Dad" />
					<p>
						Being a dedicated father, I have developed strong time management and communication skills. These skills enable me to collaborate effectively with
						clients, colleagues, and team members, ensuring that projects are completed on time and exceed expectations.
					</p>
					<HeadingHighlight title="Experience" />
					<p>
						With over a decade of experience in the field, I have successfully transformed numerous ideas and concepts into fully functional websites. My deep
						understanding of web development principles, best practices, and industry standards allows me to provide tailored solutions that meet the unique
						requirements of clients.
					</p>

					<p>
						I am always enthusiastic about staying up-to-date with the latest trends and innovations in web development. By continuously expanding my knowledge
						and exploring new approaches, I strive to deliver cutting-edge solutions that push the boundaries of what can be achieved on the web.
					</p>
					<HeadingHighlight title="TL;DR" />
					<p>
						I am an experienced web developer specializing in WordPress, Next.js, Astro, and Tailwind CSS. Balancing my commitment to my work with a deep
						appreciation for family, I bring a balanced perspective to every project. With the blend of remote work advantages, technical expertise, and years
						of experience, I deliver exceptional web solutions that seamlessly merge functionality and aesthetic appeal.
					</p>
				</section>

				<section>
					<svg
						className="w-64 h-64 transform rotate-[35deg] stroke-blue-600"
						viewBox="0 0 155 45"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.23425 11.4706C2.95888 22.4268 8.74485 52.6144 13.2726 42.4896C16.2053 35.9319 19.7278 29.4742 22.5201 22.9103C26.2267 14.1975 25.6547 22.1938 28.052 27.9103C28.7813 29.6493 34.7482 43.5469 37.0669 36.421C39.6151 28.5898 41.3825 20.9744 47.1616 14.804C51.8581 9.78936 55.4994 19.0694 57.6274 22.4452C63.7019 32.0819 63.3756 29.3529 66.3876 19.3887C67.2051 16.684 74.08 -0.121181 74.4445 0.739637C76.1767 4.83043 77.0939 10.2234 77.8279 14.5769C78.448 18.254 82.5655 42.7245 84.6722 28.9126C85.8721 21.0458 93.565 -1.08979 93.8255 6.86372C93.998 12.1324 91.156 28.7049 97.8623 30.906C101.409 32.07 106.387 27.7962 109.358 26.4984C116.981 23.1681 125.175 20.0126 133.313 18.2148C136.06 17.6079 154.712 17.6977 154.167 12.3122C153.729 7.98598 145.55 -2.07876 143.978 6.12724C142.839 12.072 141.897 17.9113 139.891 23.6523C139.732 24.1086 136.304 33.8258 136.37 33.8296C140.247 34.051 151.87 17.6529 153.037 13.464"
							strokeWidth="2"
							strokeLinecap="round"
						></path>
					</svg>
					<div className="[&>svg]:w-64 [&>svg]:h-64 [&>svg]:mx-auto [&>svg]:-mt-28 [&>svg]:hover:rotate-6">
						<HeadShot />
					</div>
				</section>

				{/* <section>
					<HeadingHighlight title="Posts" />
					<ul>
						{posts.map((post) => (
							<li key={post.slug}>
								<Link href={`/${post.slug}`}>{post.entry.title}</Link>
							</li>
						))}
					</ul>
				</section> */}
			</main>
		</>
	);
}
