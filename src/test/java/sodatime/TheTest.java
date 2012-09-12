package sodatime;

import org.junit.Test;

import com.googlecode.qunitTestDriver.QUnitTestDriver;

public class TheTest {

	@Test
	public void runQunit(){
		QUnitTestDriver.run("src/test/resources/Test.html");
	}
}
