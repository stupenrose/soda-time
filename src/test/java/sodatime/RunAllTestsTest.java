package sodatime;

import org.junit.Test;

import com.googlecode.qunitTestDriver.QUnitTestDriver;

public class RunAllTestsTest {

	@Test
	public void runAllTests(){
		QUnitTestDriver.run("src/test/resources/RunAllTests.html");
	}
}
