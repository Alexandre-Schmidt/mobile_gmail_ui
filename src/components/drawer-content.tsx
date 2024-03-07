import { Image, ScrollView, Text, View } from "react-native"
import { DrawerContentComponentProps } from "@react-navigation/drawer"

import { CustomOptions } from "@/types/navigation"
import { DrawerButton } from "@/components/drawer-button"

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image
          source={require("@/assets/logo.png")}
          className="w-28 ml-5"
          resizeMode="contain"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {drawerProps.state.routes.map((route, index) => {//drawerProps.state.routes esta recuperando todas as rotas
            const isFocused = drawerProps.state.index === index  // para saber se está selecionado
            const options = drawerProps.descriptors[route.key] //pegar todas as opções
              .options as CustomOptions

            if (options.title === undefined) { // só vai aparecer como opção se eu definir um titulo na pasta drawer
              return
            }

            const onPress = () => {
              const event = drawerProps.navigation.emit({
                type: "drawerItemPress", //pegar o item que foi pressionado
                canPreventDefault: true,
                target: route.key, //navega para a rota
              })

              if (!isFocused && !event.defaultPrevented) {
                drawerProps.navigation.navigate(route.name, route.params)
              }
            }

            return (
              <View key={route.key} className="w-full">
                {options.sectionTitle && (
                  <Text className="text-gray-400 text-sm font-heading uppercase ml-4 mt-6">
                    {options.sectionTitle}
                  </Text>
                )}

                <DrawerButton
                  title={options.title}
                  isFocused={isFocused}
                  iconName={options.iconName}
                  isDivider={options.isDivider}
                  notifications={options.notifications}
                  onPress={onPress}
                />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
