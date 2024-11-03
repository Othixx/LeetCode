import java.util.ArrayList;
import java.util.Arrays;

public class TestJava {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.remove(1);     // 删除索引为1的元素
        int size = list.size();    // 获取数组的大小
        int first = list.get(0);    // 获取索引为0的元素
        list.set(0, 10);    // 将索引为0的元素设置为10
        for (int num : list) {
            System.out.print(num + " ");
        }
    }
}
