/**
 * @module @minions-oss-features/sdk/schemas
 * Custom MinionType schemas for Minions Oss-features.
 */

import type { MinionType } from 'minions-sdk';

export const featureType: MinionType = {
  id: 'oss-features-feature',
  name: 'Feature',
  slug: 'feature',
  description: 'A feature in the backlog for an OSS project.',
  icon: '🎯',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'acceptanceCriteria', type: 'string', label: 'acceptanceCriteria' },
    { name: 'complexity', type: 'select', label: 'complexity' },
    { name: 'priority', type: 'select', label: 'priority' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'selectedForDate', type: 'string', label: 'selectedForDate' },
    { name: 'completedAt', type: 'string', label: 'completedAt' },
  ],
};

export const implementationplanType: MinionType = {
  id: 'oss-features-implementation-plan',
  name: 'Implementation plan',
  slug: 'implementation-plan',
  description: 'A step-by-step plan for implementing a feature.',
  icon: '📋',
  schema: [
    { name: 'featureId', type: 'string', label: 'featureId' },
    { name: 'steps', type: 'string', label: 'steps' },
    { name: 'estimatedHours', type: 'number', label: 'estimatedHours' },
    { name: 'filesAffected', type: 'string', label: 'filesAffected' },
    { name: 'testsRequired', type: 'string', label: 'testsRequired' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const customTypes: MinionType[] = [
  featureType,
  implementationplanType,
];

