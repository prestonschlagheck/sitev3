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
    const [imageError, setImageError] = useState(false);
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
          return { maxWidth: '100px', maxHeight: `${targetTextSize + 4}px`, marginLeft: '-4px', marginTop: '1px' }; // 44px - decreased, moved left 4px, down 1px
        case 'wix':
          return { maxWidth: '68px', maxHeight: `${targetTextSize - 2}px`, marginTop: '1px' }; // 38px - decreased by 20% from 85px, down 1px
        case 'yahoo-finance':
          return { maxWidth: '145px', maxHeight: `${targetTextSize + 6}px`, marginTop: '1px' }; // 46px - decreased, down 1px
        case 'vercel':
        case 'ramp':
          return { maxWidth: '110px', maxHeight: `${targetTextSize + 4}px`, marginTop: '4px' }; // 44px - decreased, down 4px (was 3px, now +1px)
        
        // Increased size logos
        case 'google-cloud-console':
          return { maxWidth: '864px', maxHeight: `${targetTextSize + 72}px`, marginTop: '5px' }; // 112px - increased by 20%, moved down 5px (was 3px, now +2px)
        case 'openai':
          return { maxWidth: '399px', maxHeight: `${targetTextSize + 39}px`, marginTop: '14px' }; // 79px - increased by 15% + 14px down shift (was 12px, now +2px)
        case 'railway':
          return { maxWidth: '168px', maxHeight: `${targetTextSize + 15}px`, marginTop: '5px' }; // 55px - increased by 5%, moved down 5px (was 3px, now +2px)
        case 'wordpress':
          return { maxWidth: '351px', maxHeight: `${targetTextSize + 35}px`, marginTop: '4px' }; // 75px - increased by 30%, down 4px (was 3px, now +1px)
        case 'elementor':
          return { maxWidth: '170px', maxHeight: `${targetTextSize + 16}px`, marginTop: '4px' }; // 56px - unchanged, down 4px
        case 'notion':
          return { maxWidth: '87px', maxHeight: `${targetTextSize + 7}px`, marginTop: '1px' }; // 47px - decreased by 20% from 109px, down 1px
        case 'n8n':
          return { maxWidth: '132px', maxHeight: `${targetTextSize + 14}px`, marginTop: '3px' }; // 54px - increased by 20%, moved down 3px
        
        // Standard unchanged logos
        case 'cursor': 
        case 'firebase':
          return { maxWidth: '135px', maxHeight: `${targetTextSize + 10}px`, marginTop: '5px' }; // 50px, down 5px (was 4px, now +1px)
        case 'cloudflare':
          return { maxWidth: '122px', maxHeight: `${targetTextSize + 9}px`, marginTop: '-7px' }; // 45px - decreased by 10%, moved up 7px total
        case 'github':
          return { maxWidth: '244px', maxHeight: `${targetTextSize + 18}px`, marginTop: '3px' }; // 58px - increased by 20%, down 3px
        case 'replit':
          return { maxWidth: '156px', maxHeight: `${targetTextSize + 12}px`, marginTop: '4px' }; // 52px - increased by 20%, moved down 4px (was 3px, now +1px)
        case 'perplexity':
          return { maxWidth: '150px', maxHeight: `${targetTextSize + 12}px`, marginTop: '4px' }; // 52px, down 4px (was 3px, now +1px)
        
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
    
    const handleImageError = () => {
      if (srcIndex < sources.length - 1) {
        // Try next source
        setSrcIndex(srcIndex + 1);
      } else {
        // All sources failed, show text fallback
        setImageError(true);
      }
    };
    
    return (
      <div 
        className="flex-shrink-0 flex items-center justify-center" 
        style={{ 
          marginRight: logoSpacing, 
          minWidth: '100px', 
          height: '60px' // Consistent container height for center alignment
        }}
      >
        {!imageError && currentSrc ? (
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
            onError={handleImageError}
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
    <section id="software" className="py-12 lg:py-16">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-white"
          style={{ marginBottom: '40px' }}
        >
          Tools & Platforms
        </motion.h2>
        
        <div className="relative overflow-hidden py-12">
          {/* Left fade */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#07090a] via-[#07090a]/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#07090a] via-[#07090a]/80 to-transparent z-10 pointer-events-none" />
          
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


