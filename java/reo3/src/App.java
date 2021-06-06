import java.util.ArrayList;
import java.util.Random;

public class App {

    public static void main(String[] args) throws Exception {
        // Chamada quicksort
        /*
         * int v[] = {43,23,8,5,6,12,10,27,92,63}; quick(v, 0, v.length -1); for(int
         * i=0; i < v.length; i++){ System.out.println(v[i]); }
         */

        // geração vetor gaussiano
        double arr[] = new double[100];
        Random random = new Random();
        for (int i = 0; i < 100; i++) {
            arr[i] = random.nextGaussian() * 0.2 + 0.5;
            System.out.println("Value: " + arr[i]);
        }
        bucketSort(arr, 8);
    }

    static void quick(int arr[], int start, int end) {
        if (start >= end) {
            return;
        }
        int middle = (start + end) / 2;
        int pivot = arr[middle];
        int i = start;
        int j = end;
        while (true) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (j <= i) {
                break;
            }
            int temporary = arr[i];
            arr[i] = arr[j];
            arr[j] = temporary;
            i++;
            j--;
        }
        quick(arr, start, j);
        quick(arr, j + 1, end);
    }

    static void bucketSort(double[] arr, int n) {
        if (n <= 0)
            return;

        double standardDeviationPrevious = -999999;
        double standardDeviation = -0.1; // Média menos 3 desvios

        @SuppressWarnings("unchecked")
        ArrayList<Double>[] bucket = new ArrayList[n];

        // Cria os buckets vazios
        for (int i = 0; i < n; i++)
            bucket[i] = new ArrayList<Double>();

        // Adiciona os elementos nos buckets
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (arr[j] > standardDeviationPrevious && arr[j] < standardDeviation) {
                    bucket[i].add(arr[j]);
                }
            }
            standardDeviationPrevious = standardDeviation;
            standardDeviation += 0.2;
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < bucket[i].size(); j++) {
                System.out.println(bucket[i].get(j));
            }
        }

        // Sort the elements of each bucket
        /*
         * for (int i = 0; i < n; i++) { Collections.sort((bucket[i])); }
         */
    }
}
