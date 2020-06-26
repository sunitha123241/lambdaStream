import java.util.stream.Stream; 
  
class filterstrings { 
  
    public static void main(String[] args) 
    { 
        Stream<String> stream = Stream.of("app", "ace", "apple", "banana"); 
        stream.filter(s -> s.startsWith("a") && s.length()==3)
        .forEach(System.out::println); 
    } 
} 