import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/***
 * Este algoritmo gera um vetor double de 100 posições Preenche o vetor
 * utilizando distribuição normal gaussiana e Ordenada utilizando bucketsort
 * junto com o quicksort
 */

public class Reo03 {
    static double arr[] = new double[100];

    public static void main(String[] args) throws Exception {

        // geração vetor gaussiano
        Random random = new Random(System.currentTimeMillis());

        for (int i = 0; i < 100; i++) {
            arr[i] = random.nextGaussian() * 0.2 + 0.5;
            // System.out.println("Value: " + arr[i]);
        }
        bucketSort(arr, 8);

        for (double d : arr) {
            System.out.println(d);
        }
    }

    static void bucketSort(double[] v, int n) {
        if (n <= 0)
            return;

        double standardDeviationPrevious = -999999;
        double standardDeviation = -0.1; // Média menos 3 desvios

        @SuppressWarnings("unchecked")
        List<Double>[] bucket = new ArrayList[n];

        // Cria e adiciona os elementos nos respectivos buckets
        for (int i = 0; i < n; i++) {
            if (bucket[i] == null)
                bucket[i] = new ArrayList<Double>();

            for (int j = 0; j < v.length; j++) {
                if (v[j] > standardDeviationPrevious && v[j] < standardDeviation) {
                    bucket[i].add(v[j]);
                }
            }
            standardDeviationPrevious = standardDeviation;
            standardDeviation += 0.2;
        }

        // Odena os elementos de cada bucket e adiciona no array de forma ordenada
        int index = 0;
        for (int i = 0; i < n; i++) {
            List<Double> bucketSorted = quicksort(bucket[i]);
            for (int j = 0; j < bucketSorted.size(); j++) {
                arr[index++] = bucketSorted.get(j);
            }
        }
    }

    /**
     * Este método ordena um ArrayList de double usando Quicksort.
     * 
     * @param input é um ArrayList de double.
     * @return um ArrayList de doubles ordenados.
     */
    static List<Double> quicksort(List<Double> input) {

        if (input.size() <= 1) {
            return input;
        }

        int middle = (int) Math.ceil((double) input.size() / 2);
        double pivot = input.get(middle);

        List<Double> less = new ArrayList<Double>();
        List<Double> greater = new ArrayList<Double>();

        for (int i = 0; i < input.size(); i++) {
            if (input.get(i) <= pivot) {
                if (i == middle) {
                    continue;
                }
                less.add(input.get(i));
            } else {
                greater.add(input.get(i));
            }
        }
        return concatenate(quicksort(less), pivot, quicksort(greater));
    }

    /**
     * Junta o list less, o pivot double e o list maior em um único list.
     * 
     * @param less    ArrayList double com valores menores que pivô.
     * @param pivot   o valor double do pivô.
     * @param greater ArrayList double com valores maiores que pivô.
     * @return o ArrayList double após a junção.
     */
    static List<Double> concatenate(List<Double> less, double pivot, List<Double> greater) {

        List<Double> list = new ArrayList<Double>();

        // O for abaixo pode ser trocado por: list.addAll(less);
        for (int i = 0; i < less.size(); i++) {
            list.add(less.get(i));
        }

        list.add(pivot);

        // O for abaixo pode ser trocado por: list.addAll(greater);
        for (int i = 0; i < greater.size(); i++) {
            list.add(greater.get(i));
        }
        return list;
    }
}