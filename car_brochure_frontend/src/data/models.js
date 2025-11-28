export const models = [
  {
    id: 'ocean-s',
    name: 'Ocean S',
    tagline: 'Balanced performance with impressive efficiency',
    heroImage: 'https://images.unsplash.com/photo-1549921296-3cc26e29d3e9?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop'
    ],
    specs: {
      engine: '2.0L Turbo',
      power: '250 hp',
      zeroToSixty: '6.1s',
      rangeOrMpg: '34 mpg',
      drivetrain: 'AWD'
    },
    availableColors: [
      { code: '#1F2937', name: 'Graphite' },
      { code: '#2563EB', name: 'Ocean Blue' },
      { code: '#F59E0B', name: 'Amber' },
      { code: '#EF4444', name: 'Crimson' }
    ],
    trims: ['Base', 'Premium', 'Sport'],
    wheels: ['18" Aero', '19" Multi-Spoke', '20" Performance']
  },
  {
    id: 'ocean-x',
    name: 'Ocean X',
    tagline: 'Performance tuned for enthusiasts',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop'
    ],
    specs: {
      engine: '3.0L Twin-Turbo',
      power: '380 hp',
      zeroToSixty: '4.2s',
      rangeOrMpg: '28 mpg',
      drivetrain: 'AWD'
    },
    availableColors: [
      { code: '#111827', name: 'Midnight' },
      { code: '#2563EB', name: 'Ocean Blue' },
      { code: '#10B981', name: 'Emerald' }
    ],
    trims: ['Sport', 'Track'],
    wheels: ['19" Forged', '20" Performance', '21" Track']
  },
  {
    id: 'ocean-e',
    name: 'Ocean E',
    tagline: 'Electric serenity with modern luxury',
    heroImage: 'https://images.unsplash.com/photo-1606661240290-647eb07f9a77?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606661240290-647eb07f9a77?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop'
    ],
    specs: {
      engine: 'Dual Motor Electric',
      power: '300 kW',
      zeroToSixty: '4.9s',
      rangeOrMpg: '320 mi',
      drivetrain: 'AWD'
    },
    availableColors: [
      { code: '#1F2937', name: 'Graphite' },
      { code: '#2563EB', name: 'Ocean Blue' },
      { code: '#6B7280', name: 'Silver' },
      { code: '#F59E0B', name: 'Amber' }
    ],
    trims: ['Standard', 'Extended', 'Luxury'],
    wheels: ['19" Aero', '20" Multi-Spoke']
  }
];

// PUBLIC_INTERFACE
export function getModelById(id) {
  /** Get a single model by id */
  return models.find(m => m.id === id);
}
