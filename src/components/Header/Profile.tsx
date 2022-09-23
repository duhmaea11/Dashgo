import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Eduardo da Silva</Text>
          <Text 
            color="gray.300"
            fontSize="small"
          >
            eduardomaea@gmail.com
          </Text>
        </Box>

        <Avatar size="md" name="Eduardo da Silva" src="https://github.com/duhmaea11.png" />
      </Flex>
    )
}