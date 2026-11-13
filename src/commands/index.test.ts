import { describe, expect, it } from 'vitest';
import { commands } from './index.js';

describe('commands', () => {
  it('have unique, valid names and descriptions', () => {
    const names = commands.map((c) => c.data.toJSON().name);
    expect(new Set(names).size).toBe(names.length);
    for (const c of commands) {
      const json = c.data.toJSON();
      expect(json.name).toMatch(/^[a-z0-9_-]{1,32}$/);
      expect(json.description.length).toBeGreaterThan(0);
      expect(json.description.length).toBeLessThanOrEqual(100);
    }
  });
});
