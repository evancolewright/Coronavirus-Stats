import Particles from 'react-tsparticles';

export default function ParticleOverlay() {
  return (
    <Particles
      options={{
        backgroundMode: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 1,
              size: 40,
            },
            grab: {
              distance: 400,
            },
            connect: {
              distance: 80,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: {
              value: '#323031',
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              default: 'bounce',
              bottom: 'bounce',
              left: 'bounce',
              right: 'bounce',
              top: 'bounce',
            },
            speed: 6,
          },
          number: {
            density: {
              enable: true,
            },
            value: 5,
          },
          opacity: {
            animation: {
              minimumValue: 0.1,
              speed: 1,
            },
          },
          shape: {
            options: {
              character: {
                fill: false,
                font: 'Verdana',
                style: '',
                value: '*',
                weight: '400',
              },
              char: {
                fill: false,
                font: 'Verdana',
                style: '',
                value: '*',
                weight: '400',
              },
              polygon: {
                nb_sides: 5,
              },
              star: {
                nb_sides: 5,
              },
              image: {
                height: 32,
                replace_color: true,
                src:
                  'https://cdn.matteobruni.it/images/particles/sars-cov-2.png',
                width: 32,
              },
              images: {
                height: 32,
                replace_color: true,
                src:
                  'https://cdn.matteobruni.it/images/particles/sars-cov-2.png',
                width: 32,
              },
            },
            type: 'image',
          },
          size: {
            value: 16,
            animation: {
              minimumValue: 0.1,
              speed: 40,
            },
          },
          stroke: {
            color: {
              value: '#000000',
              animation: {
                enable: false,
                speed: 1,
                sync: true,
              },
            },
          },
        },
      }}
    />
  );
}

/**
 * 
 * 
 * {
  "background": {
    "color": {
      "value": "#0d47a1"
    },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "backgroundMode": {
    "enable": true,
    "zIndex": 1
  },
  "fpsLimit": 60,
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "grab",
        "parallax": {
          "enable": true,
          "force": 60
        }
      }
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "grab": {
        "distance": 400
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": {
        "value": "#ffffff"
      },
      "distance": 150,
      "enable": true,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      }
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": 0.5,
      "animation": {
        "enable": true,
        "minimumValue": 0.1,
        "speed": 3
      }
    },
    "shape": {
      "options": {
        "polygon": {
          "nb_sides": 5
        },
        "star": {
          "nb_sides": 5
        },
        "image": {
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100,
          "height": 100
        },
        "images": {
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100,
          "height": 100
        }
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": 10,
      "animation": {
        "enable": true,
        "minimumValue": 0.1,
        "speed": 20
      }
    },
    "stroke": {
      "color": {
        "value": "#000000",
        "animation": {
          "enable": false,
          "speed": 1,
          "sync": true
        }
      }
    }
  }
}
 */
