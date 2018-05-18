#include <SPI.h>

#define LOAD_PIN 7 //separate wire that allow us to connect to the pin that we are talking to
void setup() {
  // put your setup code here, to run once:
  pinMode(LOAD_PIN, OUTPUT);

  SPI.setBitOrder(MSBFIRST);

  SPI.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(LOAD_PIN, LOW);

  SPI.transfer(0x03); //address, look to the chart
  SPI.transfer(0XFF);//transfer data, SPI trigger //to turn all LED on

  digitalWrite(LOAD_PIN,HIGH);
}
