import { z } from 'zod';
import { isValidMACAddress } from '../isValidMACAddress';

export const TaskSchema = z.object({
  macaddress: z
    .string()
    .refine((mac) => isValidMACAddress(mac))
    .optional(),
  type: z.enum(['study', 'gym', 'work', 'food', 'people', 'travel', 'code']),
  title: z.string(),
  description: z.string(),
  when: z
    .string()
    .transform((date) => {
      return new Date(date);
    })
    .refine((when) => !isNaN(when.getTime())),
});
