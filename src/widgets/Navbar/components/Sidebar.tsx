import Image from 'next/image';
import Link from 'next/link';

import { chakra, Flex, Text } from '@chakra-ui/react';

interface SidebarProps {
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({onClose}) => {
  return (
    <Flex 
      w="full" 
      height="100vh" 
      flexDir="column" 
      bgColor="brand.100" 
      pos="fixed" 
      top={0} 
      left={0}
      justifyContent="center"
      fontSize="4xl"
      color="gray.900"
      pl={6}
      gap={4}
      >
      <chakra.button 
        display={['block', 'block', 'flex', 'none', 'none']} 
        pos="absolute"
        right="16px"
        top="16px"
        onClick={onClose}>
        <Image
          src="/close.png"
          width={40}
          height={40}
          alt='Иконка закрытия мобильного меню'
        />
      </chakra.button>
      <Link href="/" onClick={onClose}>
        <Text>Главная</Text>
      </Link>
      <Link href="/afisha" onClick={onClose}>
        <Text>Афиша</Text>
      </Link>
      <Link href="/perfomances" onClick={onClose}>
        <Text>Спектакли</Text>
      </Link>
      <Link href="/about" onClick={onClose}>
        <Text>О театре</Text>
      </Link>
      <Link href="/news" onClick={onClose}>
        <Text>Новости</Text>
      </Link>
      <Link href="/contacts" onClick={onClose}>
        <Text>Контакты</Text>
      </Link>
    </Flex>
  )
}