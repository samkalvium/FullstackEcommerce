import '../global.css'
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const quearyClient = new QueryClient();

export default function RootLayout() {
    return (
        <QueryClientProvider client={quearyClient}>
            <GluestackUIProvider>
                <Stack>
                    <Stack.Screen name='index' options={{ title: 'Shop' }} />
                    <Stack.Screen name='product/[id]' options={{ title: 'Product' }} />
                </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>
    )
}