initSidebarItems({"mod":[["traits","All traits are re-exported here to allow glob imports."]],"struct":[["ByteBuf","A `Buf` backed by a contiguous region of memory."],["Bytes","A specialized `ByteStr` box."],["MutByteBuf",""],["MutSliceBuf",""],["ROByteBuf","Same as `ByteBuf` but cannot be flipped to a `MutByteBuf`."],["RingBuf","Buf backed by a continous chunk of memory. Maintains a read cursor and a write cursor. When reads and writes reach the end of the allocated buffer, wraps around to the start."],["Rope","An immutable sequence of bytes formed by concatenation of other `ByteStr` values, without copying the data in the pieces. The concatenation is represented as a tree whose leaf nodes are each a `Bytes` value."],["RopeBuf",""],["SeqByteStr",""],["SliceBuf",""],["SmallByteStr",""],["SmallByteStrBuf",""]],"enum":[["BufError",""]],"trait":[["Buf","A trait for values that provide sequential read access to bytes."],["BufExt","An extension trait providing extra functions applicable to all `Buf` values."],["ByteStr","An immutable sequence of bytes. Operations will not mutate the original value. Since only immutable access is permitted, operations do not require copying (though, sometimes copying will happen as an optimization)."],["MutBuf","A trait for values that provide sequential write access to bytes."],["MutBufExt","An extension trait providing extra functions applicable to all `MutBuf` values."],["Sink","A value that reads bytes from a Buf into itself"],["Source","A value that writes bytes from itself into a `MutBuf`."],["ToBytes",""]]});