/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
  			fira: [
  				'Fira Code',
  				'monospace'
  			]
      },
      colors: {
        cyber: {
          dark: '#0a0a0f',
          darker: '#050508',
          purple: '#a855f7',
          pink: '#ec4899',
          cyan: '#22d3ee',
          blue: '#3b82f6',
          green: '#10b981',
  				orange: '#f97316'
  			},
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
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
  			float: 'float 6s ease-in-out infinite',
  			glitch: 'glitch 1s linear infinite',
  			scan: 'scan 2s linear infinite',
  			typing: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
  			'border-flow': 'border-flow 3s linear infinite'
      },
      keyframes: {
        pulseGlow: {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
  				},
  				'50%': {
  					boxShadow: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(236, 72, 153, 0.4)'
  				}
        },
        float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
        },
        glitch: {
  				'0%, 100%': {
  					transform: 'translate(0)'
  				},
  				'20%': {
  					transform: 'translate(-2px, 2px)'
  				},
  				'40%': {
  					transform: 'translate(-2px, -2px)'
  				},
  				'60%': {
  					transform: 'translate(2px, 2px)'
  				},
  				'80%': {
  					transform: 'translate(2px, -2px)'
  				}
        },
        scan: {
  				'0%': {
  					transform: 'translateY(-100%)'
  				},
  				'100%': {
  					transform: 'translateY(100%)'
  				}
        },
        'gradient-x': {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				}
        },
        'border-flow': {
  				'0%': {
  					backgroundPosition: '0% 0%'
        },
  				'100%': {
  					backgroundPosition: '200% 0%'
  				}
  			}
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      backgroundSize: {
  			grid: '50px 50px'
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
