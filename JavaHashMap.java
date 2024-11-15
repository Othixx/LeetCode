import java.util.HashMap;
import java.util.Map;

public class JavaHashMap {
    // public static void main(String[] args) {
    //     Map<String, Integer> map = new HashMap<>();
    //     map.put("Alice", 30);
    //     map.put("Bob", 25);
    //     map.put("Charlie", 35);
    //     int age = map.get("Alice");
    //     System.out.println(age);    // 30
    //     map.remove("Bob");
        
    //     // 遍历 Map 中的所有键
    //     System.out.println("遍历键:");
    //     for (String name : map.keySet()) {
    //         System.out.println(name);
    //     }

    //     // 遍历 Map 中的所有值
    //     System.out.println("遍历值:");
    //     for (int value : map.values()) {
    //         System.out.println(value);
    //     }

    //     // 遍历 Map 中的所有键值对
    //     System.out.println("遍历键值对:");
    //     for (Map.Entry<String, Integer> entry : map.entrySet()) {
    //         System.out.println(entry.getKey() + ": " + entry.getValue());
    //     }
    // }

    public static void main(String[] args) {
        Map<String, String> countries = new HashMap<>();

        countries.put("Washington", "America");
        countries.put("Canberra", "Australia");
        countries.put("Madrid", "Spain");

        countries.merge("Washington", "USA", (oldValue, newValue) -> oldValue + "/" + newValue);

        System.out.println("Updated HashMap: " + countries);
    }
}