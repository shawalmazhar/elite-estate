export interface Property {
  id: string;
  name: string;
  type: 'Penthouse' | 'Villa' | 'Studio';
  price: string;
  numericPrice: number;
  location: string;
  city: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  longDescription: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  ceilingHeight: string;
  yearBuilt: string;
  features: string[];
  specs: { label: string; value: string }[];
  floorPlans: {
    level: string;
    description: string;
    svgPath: string; // Placeholder or inline SVG identifiers
  }[];
}

export const propertiesData: Property[] = [
  {
    id: 'the-sky-penthouse',
    name: 'The Sky Penthouse',
    type: 'Penthouse',
    price: '$42,000,000',
    numericPrice: 42000000,
    location: 'Billionaires\' Row, Manhattan',
    city: 'New York',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Suspended 1,000 feet above Central Park, this iconic triplex sanctuary combines structural majesty with endless, unobstructed glass horizons.',
    longDescription: 'Commanding the top three floors of the prestigious Horizon Tower, The Sky Penthouse represents the absolute pinnacle of Manhattan vertical living. Spanning over 12,400 square feet of curated indoor space and an additional 3,000 square feet of private wrap-around terrace, this residence offers a 360-degree panoramic view of Central Park, the Hudson River, and the iconic city skyline. Fully customized by legendary Italian designers, every detail speaks of refined elegance, from the rare Calacatta gold marble floors to the hand-stitched leather panels lining the private lift lobby.',
    bedrooms: 6,
    bathrooms: 7.5,
    area: '12,400 Sq. Ft.',
    ceilingHeight: '14 Ft.',
    yearBuilt: '2025',
    features: [
      'Private Outdoor Infinity Oasis Pool',
      'Dedicated Quad-Engine Helipad Access',
      '24/7 Elite Private Butler Services',
      'Bespoke Culinary Professional Suite',
      'Wellness Center with Steam/Hydrotherapy Room',
      'State-of-the-Art Savant AI Home System'
    ],
    specs: [
      { label: 'Architectural Style', value: 'Ultra-Modern Triplex' },
      { label: 'Primary Marble', value: 'Calacatta Borghini & Nero Marquina' },
      { label: 'Automation System', value: 'Savant Elite Pro (Voice + AI)' },
      { label: 'Wine Cellar Capacity', value: '1,200 Bottles (Climate-Controlled)' },
      { label: 'HVAC Filtration', value: 'HEPA Medical-Grade Triple Zone' },
      { label: 'Ceiling Detail', value: 'Acoustic-Dampened Hand-Applied Plaster' }
    ],
    floorPlans: [
      {
        level: 'Level 1',
        description: 'Grand reception salon, custom culinary suite, private dining gallery, and double-height lounge overlooks.',
        svgPath: 'level-1'
      },
      {
        level: 'Level 2',
        description: 'Primary owner sanctuary, four guest suites, library lounge, and private office quarters.',
        svgPath: 'level-2'
      },
      {
        level: 'Rooftop Oasis',
        description: 'Heated infinity sky-pool, wellness spa suite, firepit lounge, and private helipad boarding terminal.',
        svgPath: 'rooftop-oasis'
      }
    ]
  },
  {
    id: 'marina-luminary-villa',
    name: 'The Marina Luminary',
    type: 'Villa',
    price: '$28,500,000',
    numericPrice: 28500000,
    location: 'Palm Jumeirah Frond G',
    city: 'Dubai',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'An architectural masterwork carved along the pristine waters of Palm Jumeirah, capturing the essence of coastal luxury and private yacht access.',
    longDescription: 'The Marina Luminary is a sculptural beachfront villa offering a seamless transition between indoor opulence and private beach serenity. Crafted using imported Portuguese limestone and extensive glass panes, the villa boasts private boat berthing, a magnificent sunken glass lounge within the pool, and an outdoor terrace designed for hosting high-profile private culinary experiences.',
    bedrooms: 5,
    bathrooms: 6,
    area: '9,800 Sq. Ft.',
    ceilingHeight: '12.5 Ft.',
    yearBuilt: '2024',
    features: [
      'Private 100ft Yacht Docking Slip',
      'Private Sand Beach Frontage',
      'Sunken Lounge in Double-Sided Pool',
      'Dedicated Chef Kitchen & Staff Quarters',
      'Triple-Car Showroom Garage'
    ],
    specs: [
      { label: 'Architectural Style', value: 'Contemporary Coastal Biophilic' },
      { label: 'Stone Cladding', value: 'Portuguese Crema Marfil Limestone' },
      { label: 'Pool Architecture', value: 'Overflow Saltwater with Acrylic Walls' },
      { label: 'Entertainment Suite', value: 'Dolby Atmos 12-Seat Cinema' }
    ],
    floorPlans: [
      {
        level: 'Level 1',
        description: 'Coastal salon, cinema, private docks, and pools.',
        svgPath: 'level-1'
      },
      {
        level: 'Level 2',
        description: 'Bedrooms, master suite, and private terrace.',
        svgPath: 'level-2'
      }
    ]
  },
  {
    id: 'belgravia-manor-studio',
    name: 'Belgravia Mews Suite',
    type: 'Studio',
    price: '$12,800,000',
    numericPrice: 12800000,
    location: 'Belgrave Square, Belgravia',
    city: 'London',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'A historic Victorian footprint reinvented as a private, high-spec modern pied-à-terre featuring luxury details and automated security.',
    longDescription: 'Situated in the heart of London\'s diplomatic quarter, the Belgravia Mews Suite combines a protected heritage exterior with a breathtaking, state-of-the-art custom interior. Designed as an elite executive studio, this residence features a retracting glass roof garden, a hidden biometric vault, and bespoke English oak millwork.',
    bedrooms: 2,
    bathrooms: 2.5,
    area: '4,200 Sq. Ft.',
    ceilingHeight: '11 Ft.',
    yearBuilt: '2023',
    features: [
      'Retracting Glass Conservatory Roof',
      'Biometric Triple-Lock Security Chamber',
      'Bespoke Hand-Carved English Oak Panels',
      'Private Subterranean Wellness Sauna'
    ],
    specs: [
      { label: 'Heritage Class', value: 'Grade II Listed Victorian' },
      { label: 'Wood Finishes', value: 'Fumed English Royal Oak' },
      { label: 'Security System', value: 'Military-Grade Biometric Access' },
      { label: 'HVAC System', value: 'Underfloor Hydronic Active Cooling' }
    ],
    floorPlans: [
      {
        level: 'Level 1',
        description: 'Open living pavilion, oak kitchen, study, and biometric vault.',
        svgPath: 'level-1'
      },
      {
        level: 'Rooftop Oasis',
        description: 'Retractable roof conservatory garden and private gym.',
        svgPath: 'rooftop-oasis'
      }
    ]
  }
];
