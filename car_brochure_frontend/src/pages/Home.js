import React from 'react';
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import SpecsPanel from '../components/SpecsPanel/SpecsPanel';
import Customizer from '../components/Customizer/Customizer';
import { models } from '../data/models';
import { useApp } from '../state/AppContext';

export default function Home() {
  const { selectedModelId, setSelectedModelId } = useApp();
  const model = models.find((m) => m.id === selectedModelId) || models[0];

  return (
    <>
      <Hero
        title="The Ocean Series"
        subtitle="Precision engineered. Effortlessly modern. Explore dynamic performance with impressive efficiency."
        image={model.heroImage}
        onPrimary={() => window.location.assign('/models')}
        onSecondary={() => document.getElementById('builder')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <section className="container" style={{ marginBottom: 32 }}>
        <div className="card" style={{ padding: 16 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {models.map((m) => (
              <button
                key={m.id}
                className={`btn ${m.id === model.id ? 'btn-primary' : ''}`}
                onClick={() => setSelectedModelId(m.id)}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Gallery images={model.gallery} />

      <SpecsPanel models={[model]} />

      <div id="builder" />
      <Customizer model={model} />
    </>
  );
}
