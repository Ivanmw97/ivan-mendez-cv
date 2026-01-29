export const PROJECT_IMAGES = {
  delyo: {
    main: '/assets/images/projects/delyo/delyo-banner-en.png',
    dashboard: '/assets/images/projects/delyo/delyo-dashboard.png',
    mobile: '/assets/images/projects/delyo/delyo-mobile.jpg',
    placeholder: 'https://placehold.co/800x500/4F46E5/FFFFFF?text=DelYo+Padel+Tracker'
  },
  financialManager: {
    main: '/assets/images/projects/financial-manager/financial-manager.png',
    dashboard: '/assets/images/projects/financial-manager/financial-manager.png',
    mobile: '/assets/images/projects/financial-manager/financial-manager-mobile.jpg',
    placeholder: 'https://placehold.co/800x500/059669/FFFFFF?text=Financial+Manager'
  },
  kompkit: {
    main: '/assets/images/projects/kompkit/kompkit.jpeg',
    logo: '/assets/images/projects/kompkit/kompkit.jpeg',
    dashboard: '/assets/images/projects/kompkit/kompkit-dashboard.png',
    mobile: '/assets/images/projects/kompkit/kompkit-mobile.jpg',
    placeholder: 'https://placehold.co/800x500/DC2626/FFFFFF?text=KompKit'
  },
  cryptotracker: {
    main: '/assets/images/projects/cryptotracker/CT-banner.png',
    placeholder: 'https://placehold.co/800x500/F59E0B/FFFFFF?text=CryptoTracker'
  },
  novaflow: {
    main: '/assets/images/projects/novaflow/novaflow.png',
    dashboard: '/assets/images/projects/novaflow/novaflow.png',
    mobile: '/assets/images/projects/novaflow/novaflow-mobile.jpg',
    placeholder: 'https://placehold.co/800x500/8B5CF6/FFFFFF?text=NovaFlow'
  }
} as const;

export const ICON_IMAGES = {
  github: '/assets/images/icons/github.svg',
  linkedin: '/assets/images/icons/linkedin.svg',
  email: '/assets/images/icons/email.svg'
} as const;

export const LOGO_IMAGES = {
  personal: '/assets/images/logos/ivan-logo.svg',
  companies: {}
} as const;

export function getProjectImage(project: keyof typeof PROJECT_IMAGES, variant: 'main' | 'placeholder' = 'main') {
  const projectImages = PROJECT_IMAGES[project];
  
  if (project === 'delyo' && variant === 'main') {
    return projectImages.main;
  }
  
  if (project === 'kompkit' && variant === 'main') {
    return projectImages.main;
  }
  
  if (project === 'financialManager' && variant === 'main') {
    return projectImages.main;
  }
  
  if (project === 'cryptotracker' && variant === 'main') {
    return projectImages.main;
  }
  
  if (project === 'novaflow' && variant === 'main') {
    return projectImages.main;
  }
  
  return projectImages.placeholder;
}

export function hasLocalImage(project: keyof typeof PROJECT_IMAGES, variant: string): boolean {
  if (project === 'delyo' && variant === 'main') {
    return true;
  }
  if (project === 'kompkit' && variant === 'main') {
    return true;
  }
  if (project === 'financialManager' && variant === 'main') {
    return true;
  }
  if (project === 'cryptotracker' && variant === 'main') {
    return true;
  }
  if (project === 'novaflow' && variant === 'main') {
    return true;
  }
  return false;
}
