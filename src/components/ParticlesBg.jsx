
import { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useSelector } from 'react-redux';

export default function ParticlesBg() {
  const [loaded, setLoaded] = useState(false);
  const themeMode = useSelector((state) => state.theme.themeMode);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setLoaded(true));
  }, []);

  const commonOptions = {
    fpsLimit: 60,
    fullScreen: { enable: false },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 80, duration: 0.4 } },
    },
    particles: {
      move: { enable: true, speed: 0.6 },
      size: { value: { min: 1, max: 3 }, random: true },
      links: {
        enable: true,
        distance: 120,
        width: 1,
      },
    },
  };

  const options = themeMode === 'light'
    ? {
        ...commonOptions,
        background: { color: 'transparent' },
        particles: {
          ...commonOptions.particles,
          color: { value: '#1662de' },
          number: { value: 200, density: { enable: true, area: 800 } },
          opacity: { value: 0.3 },
          links: { ...commonOptions.particles.links, color: '#60a5fa', opacity: 0.4 },
        },
      }
    : {
        ...commonOptions,
        background: { color: '#18181b' },
        particles: {
          ...commonOptions.particles,
          color: { value: '#ffffff' },
          number: { value: 90, density: { enable: true, area: 800 } },
          opacity: { value: 0.15 },
          links: { ...commonOptions.particles.links, color: '#ffffff', opacity: 0.2 },
        },
      };

  if (!loaded) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}
