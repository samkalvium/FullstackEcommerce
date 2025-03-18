import { ActivityIndicator, FlatList, Text } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { listProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

export default function HomeScreen() {
    const numCol = useBreakpointValue({
        default: 2,  // Fixed typo from 'defualt' to 'default'
        sm: 3,
        xl: 4,
    });

    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: listProducts,
    });

    if (isLoading) {
        return <ActivityIndicator />;
    }

    if (error) {
        return <Text>Error fetching products</Text>;
    }

    return (
        <FlatList
            key={numCol}
            data={data}
            numColumns={numCol}
            contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
            columnWrapperClassName="gap-2"
            renderItem={({ item }) => <ProductListItem product={item} />}
        />
    );
}
