import { z } from 'zod';

const isValidMACAddress = (mac: string) => {
  const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macRegex.test(mac);
};

export const TaskSchema = z.object({
  macaddress: z.string().refine((mac) => isValidMACAddress(mac)).optional(),
  type: z.number(),
  title: z.string(),
  description: z.string(),
  when: z
    .string()
    .transform((date) => {
      return new Date(date);
    })
    .refine((when) => !isNaN(when.getTime())),
});
