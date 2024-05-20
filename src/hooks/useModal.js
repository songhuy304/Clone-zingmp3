import { useState } from 'react';

function useModal() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return { open, setOpen, handleToggle };
}

export default useModal;

