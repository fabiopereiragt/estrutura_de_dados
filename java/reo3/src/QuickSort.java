public class QuickSort {
    static double arr[] = new double[100];

    public static void main(String[] args){
        int v[] = { 43, 23, 8, 5, 6, 12, 10, 27, 92, 63 };
        quick(v, 0, v.length - 1);
        for (int i = 0; i < v.length; i++) {
            System.out.println(v[i]);
        }
    }

    static void quick(int v[], int start, int end) {
        if (start >= end) {
            return;
        }
        int middle = (start + end) / 2;
        int pivot = v[middle];
        int i = start;
        int j = end;
        while (true) {
            while (v[i] < pivot) {
                i++;
            }
            while (v[j] > pivot) {
                j--;
            }
            if (j <= i) {
                break;
            }
            int temporary = v[i];
            v[i] = v[j];
            v[j] = temporary;
            i++;
            j--;
        }
        quick(v, start, j);
        quick(v, j + 1, end);
    }
}
