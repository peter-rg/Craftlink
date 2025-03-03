import { JSX } from 'react';
import { toast } from 'sonner'

export function useToast() {
  return {
    toast: ({ description, action, variant }: { description: string; action?: JSX.Element; variant?: 'destructive' | 'default' }) => {
      if (variant === 'destructive') {
        toast.error(description, {
          description: action,
        })
      } else {
        toast.success(description, {
          description: action,
        })
      }
    }
  }
}
