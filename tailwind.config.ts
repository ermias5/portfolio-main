import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			main: '#1e1e1e',
  			gray: {
  				'100': '#7a7a7a',
  				'200': '#797979',
  				'300': '#121212'
  			},
  			white: '#fff',
  			darkorange: {
  				'100': '#fd6f00',
  				'200': '#fd6f0099'
  			},
  			orangered: '#e35700',
  			whitesmoke: {
  				'100': '#f8f8f8',
  				'200': '#edecec'
  			},
  			darkgray: '#afafaf',
  			gainsboro: {
  				'100': '#dedede',
  				'200': '#d9d9d9'
  			},
  			black: '#000',
  			darkslategray: '#424242',
  			antiquewhite: '#ffebdb',
  			dimgray: '#545454',
  			snow: '#fff8f8',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {},
  		fontFamily: {
  			poppins: 'Poppins',
  			montserrat: 'Montserrat'
  		},
  		borderRadius: {
  			sm: 'calc(var(--radius) - 4px)',
  			xs: '5px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)'
  		}
  	},
  	fontSize: {
  		sm: '14px',
  		md: '17px',
  		lg: '19px',
  		xl: '21px',
  		'2xl': '24px',
  		'3xl': '32px',
  		'4xl': '38px',
  		'5xl': '52px',
  		'6xl': '65px',
  		'7xl': '100px'
  	},
  	screens: {
  		tablet: '640px',
  		laptop: '1024px',
  		desktop: '1280px',
  		xl: '1440px',
  		'2xl': '1920px'
  	}
  },
  corePlugins: {
    preflight: false,
  },
    plugins: [require("tailwindcss-animate")]
};

export default config;
