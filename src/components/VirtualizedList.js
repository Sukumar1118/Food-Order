import { FixedSizeList as List } from "react-window";

const VirtualizedList = () => {
    const items = Array.from({ length: 10000 }).map((_, index) => `Item ${index}`);
    
    return (
        <List
        height={150}
        itemCount={items.length}
        itemSize={35}
        width={300}
        >
        {({ index, style }) => (
            <div style={style}>{items[index]}</div>
        )}
        </List>
    );
}

export default VirtualizedList;