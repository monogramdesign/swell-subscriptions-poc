import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head lang="en">
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
