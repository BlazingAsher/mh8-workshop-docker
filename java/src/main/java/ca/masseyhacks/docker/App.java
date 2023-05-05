package ca.masseyhacks.docker;
import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        get("/hello", (req, res) -> "Hello world!");
        get("/env", (req, res) -> "The environment variable is: " + System.getenv("MASSEYHACKS_VARIABLE"));
        get("/envRuntime", (req, res) -> "The runtime environment variable is: " + System.getenv("MASSEYHACKS_VARIABLE_RUNTIME"));
    }
}
