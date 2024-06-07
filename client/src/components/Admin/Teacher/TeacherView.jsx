import { Center, Flex } from "@chakra-ui/react";
import { CardPanel } from "@components/Common";
import { panelCards } from "@config";

const TeacherView = () => {
    return (
      <Center pt={10} pb={120}>
        <Flex justify="center" wrap="wrap" gap={10} p={5}>
          {panelCards.PROFESOR.map((card, index) => (
            <CardPanel
              key={index}
              title={card.label}
              route={card.href}
              iconComponent={card.Icon}
            />
          ))}
        </Flex>
      </Center>
    );
}
export default TeacherView;