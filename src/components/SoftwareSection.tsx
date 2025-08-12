'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type SoftwareItem = { name: string; slug: string };
const SOFTWARES: SoftwareItem[] = [
  { name: 'Railway', slug: 'railway' },
  { name: 'Cursor', slug: 'cursor' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'XAI', slug: 'xai' },
  { name: 'Perplexity', slug: 'perplexity' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'Ramp', slug: 'ramp' },
  { name: 'WordPress', slug: 'wordpress' },
  { name: 'Elementor', slug: 'elementor' },
  { name: 'Wix', slug: 'wix' },
  { name: 'Cloudflare', slug: 'cloudflare' },
  { name: 'Notion', slug: 'notion' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'Replit', slug: 'replit' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Firebase', slug: 'firebase' },
  { name: 'Google Cloud Console', slug: 'google-cloud-console' },
  { name: 'Yahoo Finance', slug: 'yahoo-finance' }
];

const SoftwareSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const Logo = ({ item }: { item: SoftwareItem }) => {
    const [srcIndex, setSrcIndex] = useState(0);
    const sources = [
      `/logos/${item.slug}.png`,
      `/logos/${item.slug}.svg`,
      `/logos/${item.slug}.webp`,
    ];
    const currentSrc = sources[srcIndex];
    
    // Define sizes for content-centered logos - focused on visual center alignment
    const getLogoSize = (slug: string) => {
      // Target visual text size - all logos scaled so text appears roughly this height
      const targetTextSize = 40;
      
      switch (slug) {
        // Decreased size logos
        case 'xai':
          return { maxWidth: '100px', maxHeight: `${targetTextSize + 4}px`, marginLeft: '-4px' }; // 44px - decreased, moved left 4px
        case 'wix':
          return { maxWidth: '68px', maxHeight: `${targetTextSize - 2}px` }; // 38px - decreased by 20% from 85px
        case 'yahoo-finance':
          return { maxWidth: '145px', maxHeight: `${targetTextSize + 6}px` }; // 46px - decreased
        case 'vercel':
        case 'ramp':
          return { maxWidth: '110px', maxHeight: `${targetTextSize + 4}px` }; // 44px - decreased
        
        // Increased size logos
        case 'google-cloud-console':
          return { maxWidth: '864px', maxHeight: `${targetTextSize + 72}px`, marginTop: '3px' }; // 112px - increased by 20%, moved down 3px
        case 'openai':
          return { maxWidth: '347px', maxHeight: `${targetTextSize + 34}px`, marginTop: '8px' }; // 74px - increased by 40% + 8px down shift
        case 'railway':
          return { maxWidth: '168px', maxHeight: `${targetTextSize + 15}px`, marginTop: '3px' }; // 55px - increased by 5%, moved down 3px
        case 'wordpress':
          return { maxWidth: '351px', maxHeight: `${targetTextSize + 35}px` }; // 75px - increased by 30%
        case 'elementor':
          return { maxWidth: '170px', maxHeight: `${targetTextSize + 16}px` }; // 56px - unchanged
        case 'notion':
          return { maxWidth: '87px', maxHeight: `${targetTextSize + 7}px` }; // 47px - decreased by 20% from 109px
        case 'n8n':
          return { maxWidth: '132px', maxHeight: `${targetTextSize + 14}px`, marginTop: '3px' }; // 54px - increased by 20%, moved down 3px
        
        // Standard unchanged logos
        case 'cursor': 
        case 'firebase':
          return { maxWidth: '135px', maxHeight: `${targetTextSize + 10}px` }; // 50px
        case 'cloudflare':
          return { maxWidth: '122px', maxHeight: `${targetTextSize + 9}px`, marginTop: '-7px' }; // 45px - decreased by 10%, moved up 7px total
        case 'github':
          return { maxWidth: '244px', maxHeight: `${targetTextSize + 18}px` }; // 58px - increased by 20%
        case 'replit':
          return { maxWidth: '156px', maxHeight: `${targetTextSize + 12}px`, marginTop: '3px' }; // 52px - increased by 20%, moved down 3px
        case 'perplexity':
          return { maxWidth: '150px', maxHeight: `${targetTextSize + 12}px` }; // 52px
        
        default:
          return { maxWidth: '135px', maxHeight: `${targetTextSize + 10}px` }; // 50px
      }
    };
    
    const logoSize = getLogoSize(item.slug);
    
    // Define custom spacing for text-normalized logos
    const getLogoSpacing = (slug: string) => {
      switch (slug) {
        case 'xai':
          return '23px'; // Compact spacing for XAI + 3px
        case 'wix':
        case 'n8n':
          return '31px'; // Slightly less for smaller text logos + 3px
        case 'google-cloud-console':
        case 'yahoo-finance':
          return '38px'; // More space for longer text logos + 3px
        default:
          return '35px'; // Standard spacing for normalized text + 3px
      }
    };
    
    const logoSpacing = getLogoSpacing(item.slug);
    
    return (
      <div 
        className="flex-shrink-0 flex items-center justify-center" 
        style={{ 
          marginRight: logoSpacing, 
          minWidth: '100px', 
          height: '60px' // Consistent container height for center alignment
        }}
      >
        {currentSrc ? (
          <img
            src={currentSrc}
            alt={`${item.name} logo`}
            className="object-contain brightness-0 invert"
            style={{ 
              maxWidth: logoSize.maxWidth, 
              maxHeight: logoSize.maxHeight,
              width: 'auto',
              height: 'auto',
              display: 'block',
              marginTop: logoSize.marginTop || '0px',
              marginLeft: logoSize.marginLeft || '0px'
            }}
            onError={() => setSrcIndex((i) => (i + 1 < sources.length ? i + 1 : i))}
            draggable={false}
          />
        ) : (
          <span className="text-slate-300 text-sm font-medium opacity-80 whitespace-nowrap">
            {item.name}
          </span>
        )}
      </div>
    );
  };

  return (
    <section id="software" className="py-6 lg:py-4">
      <div className="section-container">
        <div className="text-center" style={{ marginBottom: '20px' }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-300">Tools & Platforms</h2>
        </div>
        
        <div className="relative overflow-hidden py-8">
          
          {/* Marquee container */}
          <div className="flex">
            <motion.div
              className="flex"
              animate={prefersReducedMotion ? {} : { x: ['0%', '-100%'] }}
              transition={
                prefersReducedMotion
                  ? {}
                  : {
                      x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 40,
                        ease: 'linear',
                      },
                    }
              }
            >
              {/* First set of logos */}
              {SOFTWARES.map((item) => (
                <Logo key={`first-${item.slug}`} item={item} />
              ))}
            </motion.div>
            
            {/* Duplicate set for seamless loop */}
            <motion.div
              className="flex"
              animate={prefersReducedMotion ? {} : { x: ['0%', '-100%'] }}
              transition={
                prefersReducedMotion
                  ? {}
                  : {
                      x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 40,
                        ease: 'linear',
                      },
                    }
              }
            >
              {SOFTWARES.map((item) => (
                <Logo key={`second-${item.slug}`} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;


