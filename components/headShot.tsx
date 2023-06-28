export default function HeadShot() {
	return (
		<svg
			viewBox="0 0 1080 1080"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<filter
					id="a"
					x="-20%"
					y="-20%"
					width="140%"
					height="140%"
					filterUnits="objectBoundingBox"
					primitiveUnits="userSpaceOnUse"
					colorInterpolationFilters="linearRGB"
				>
					<feMorphology
						operator="dilate"
						radius="20 20"
						in="SourceAlpha"
						result="morphology"
					></feMorphology>
					<feFlood
						floodColor="#fff"
						floodOpacity="1"
						result="flood"
					></feFlood>
					<feComposite
						in="flood"
						in2="morphology"
						operator="in"
						result="composite"
					></feComposite>
					<feMerge result="merge">
						<feMergeNode in="composite"></feMergeNode>
						<feMergeNode in="SourceGraphic"></feMergeNode>
					</feMerge>
				</filter>
			</defs>
			<g
				filter="url(#a)"
				transform="matrix(-1 0 0 1 1080 0)"
			>
				<path
					d="M532 379c132.548 0 240 107.452 240 240s-47.452 280-180 280c-99.44 0-218.524-82.99-271.81-180.415A80.647 80.647 0 0 1 312 719c-44.183 0-80-35.817-80-80 0-39.865 29.159-72.92 67.312-79C325.6 455.98 419.81 379 532 379ZM295.859 624.545l8.282 30.91"
					stroke="#000"
					strokeWidth="24"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
					fill="#fff"
				></path>
				<path
					d="M631 694.38c29.333-6.92 47-17.047 53-30.38 9-20-46.967-57.607-23.839-85M549 759c27.33 6.667 50.664 10 70 10s36.003-3.333 50-10"
					stroke="#000"
					strokeWidth="16"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<g
					transform="translate(518 518.576)"
					fillRule="evenodd"
				>
					<circle
						fill="#000"
						cx="48.229"
						cy="20"
						r="20"
					></circle>
					<path
						d="M0 22.424c16-13.333 32-20 48-20s32 6.667 48 20"
						stroke="#000"
						strokeWidth="12"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<circle
						fill="#000"
						transform="matrix(-1 0 0 1 387.543 0)"
						cx="193.771"
						cy="20"
						r="20"
					></circle>
					<path
						d="M242 22.424c-16-13.333-32-20-48-20s-32 6.667-48 20"
						stroke="#000"
						strokeWidth="12"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</g>
				<path
					d="M570 485.718c20.574 3.078 35.574 9.247 45 18.508-15-5.608-30-8.412-45-8.412s-33.333 2.804-55 8.412l10-13.46c9.426-6.442 24.426-8.125 45-5.048Zm138 0c20.574-3.077 35.574-1.394 45 5.048h0l10 13.46c-21.667-5.608-40-8.412-55-8.412s-30 2.804-45 8.412c9.426-9.261 24.426-15.43 45-18.508Z"
					stroke="#000"
					strokeWidth="16"
					fill="#000"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m279 719 33 8 49 78c-15.895-9.207-30.895-21.207-45-36s-26.438-31.46-37-50Zm64-416c24-80.667 99.667-100.667 227-60 191 61 212 228 212 253 0 16.667-3.667 37.667-11 63l-1.622-2.212C742.968 520.931 720.842 498.002 703 488c-50.826-28.49-114.183-24-154-24-39.817 0-120.896-33.042-137-36-2.312-.425-10.41 3.43 17 20l1.116.665c6.772 3.98 17.066 9.093 30.884 15.335-13.404.038-28.688-2.194-45.853-6.696l-2.643-.705c-16.792-4.523-27.861-8.215-33.208-11.077l.772 3.185c8.198 33.978 12.297 56.656 12.297 68.032 0 11.494-8.44 55.986-25.321 133.475L366 655c-15.333-35.333-27.667-59-37-71-14-18-28.798-28.57-41-25l-.755.23c-8.5 2.687-28.708 12.137-43.245 29.77-5.25 6.369-10.917 18.369-17 36l-.934-1.406C212.5 603.101 205.146 587.903 204 578c-3.882-33.558 10.597-60.644 10-68-3.476-42.822-26-107 30-152l2.235-1.786C282.652 327.271 314.907 309.534 343 303Z"
					stroke="#000"
					strokeWidth="12"
					fill="#000"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="m638.453 711.046-2.092 23.908m26.092-23.908 2.092 23.908m-52.184-21.837-3.34 23.766m79.524-22.766 3.34 23.766M585.02 718.387l-5.512 19.226m136.377-14.226 5.512 19.226M555 718l-6.003 16.455M526 729l-5 17m-22.2-2.125-5.495 24.126"
					stroke="#000"
					strokeWidth="16"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</g>
		</svg>
	);
}
