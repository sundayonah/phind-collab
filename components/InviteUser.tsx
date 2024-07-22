'use client';

import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { FormEvent, useState, useTransition } from 'react';
import { DialogClose } from '@radix-ui/react-dialog';
import { usePathname, useRouter } from 'next/navigation';
import { inviteUserToDocument } from '@/actions/actions';
import { toast } from 'sonner';
import { Input } from './ui/input';

const InviteUser = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [email, setEmail] = useState('');
   const [isPending, startTransition] = useTransition();
   const pathname = usePathname();
   const router = useRouter();

   const handleInvite = (e: FormEvent) => {
      const roomId = pathname.split('/').pop();
      if (!roomId) return;

      startTransition(async () => {
         const { success } = await inviteUserToDocument(roomId, email);

         if (success) {
            setIsOpen(false);
            router.replace('/');
            toast.success('User Added a Room successfully!');
         } else {
            toast.error('Failed to add user to room!');
         }
      });
   };
   return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
         <Button asChild variant="outline">
            <DialogTrigger>Invite</DialogTrigger>
         </Button>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Invite a user to collaborate</DialogTitle>
               <DialogDescription>
                  Enter the email of the user you want to invite
               </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleInvite} className="flex gap-2">
               <Input
                  type="email"
                  placeholder="Email"
                  className="w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Button type="submit" disabled={!email || isPending}>
                  {isPending ? 'Inviting' : 'Invite'}
               </Button>
            </form>
         </DialogContent>
      </Dialog>
   );
};
export default InviteUser;
