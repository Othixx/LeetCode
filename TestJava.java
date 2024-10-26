public class TestJava {
    public static void main(String[] args) {
        System.out.println(((Object) (10e9 + 7)).getClass().getName());
        System.out.println(((Object) (1_000_000_007)).getClass().getName());
        System.out.println((int) (10e9 + 7));
    }
}
