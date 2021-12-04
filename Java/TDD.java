

//learn what is prac
//learn what is testNg in java
package Prac;

import org.testng.Assert;

import jdk.jfr.Timestamp;
import org.testng.annotaions.Test;

public class TestPassword{
    @Test
    public void TestPaswordLength() {
PasswordValidator pv = new PasswordValidator();
Asser.assertEquals(true, pv.isValid("Abc123"));

    }

}

public class PasswordValidator {
    public boolean isValid(String Password)
    {
        if (Password.length()>=5 && Password.length()<=10)
        {
            return true;
        }
        else
            return false;
    }
}

public class TestPassword{
    @Test
    public void TestPasswordLength() {
        PasswordValidator pv = new PasswordValidator();

        Assert.assertEquals(true, pv.isValid("Abc123"));
    }
}

public class TestPasswor {
    @Timestamppublic void TestPaswordLength() {
        Assert.assertEquals(true, PasswordValidator.isValid("Abc123"));
    }
}



public class PasswordValidator {
    public static boolean isValid(String Password)
    {
        if(Password.length()>=5 && Password.length()<=10)
        {
            return true;
        }
        else
            return false;
    }
}
