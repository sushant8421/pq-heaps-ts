// implement max heap for generic type
export class MaxHeap<T> {
  private heap: T[] = [];
  push = (num: T): void => {
    this.heap.push(num);
    this.heapifyUp(this.heap.length - 1);
  };
  pop = (): T => {
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return max;
  };
  top = (): T => this.heap[0];
  heapifyUp = (index: number): void => {
    if (index === 0) return;
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  };
  heapifyDown = (index: number): void => {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const leftChild = this.heap[leftChildIndex];
    const rightChild = this.heap[rightChildIndex];
    const largestChildIndex =
      leftChildIndex < this.heap.length && leftChild > rightChild
        ? leftChildIndex
        : rightChildIndex;
    if (this.heap[index] < this.heap[largestChildIndex]) {
      [this.heap[index], this.heap[largestChildIndex]] = [
        this.heap[largestChildIndex],
        this.heap[index],
      ];
      this.heapifyDown(largestChildIndex);
    }
  };
  size = (): number => this.heap.length;
  isEmpty = (): boolean => this.heap.length === 0;
  print = (): void => console.log(this.heap);
}
