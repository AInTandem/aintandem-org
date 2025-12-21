
// Fix: Import React to resolve React namespace error for type definitions
import React from 'react';

export interface RoadmapItem {
  category: string;
  items: string[];
}

export interface FeaturePoint {
  title: string;
  description: string;
  details: string[];
  badge?: string;
}

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  subtitle?: string;
}
