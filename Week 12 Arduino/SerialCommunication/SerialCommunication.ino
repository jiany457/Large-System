void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); // the speed that you are going to communicate
  pinMode(8, INPUT_PULLUP);
}


int THANKS_BYTE = 10;
int NO_THANKS_BYTE = 11;


void loop() {
  // put your main code here, to run repeatedly:
//  delay(1000);
//  Serial.println("sypercalifragilisticexpialidocious ");
//  Serial.println("hello ");
//  Serial.println("there ");
//  Serial.println("yujie ");
//   Serial.println("|");

//port.on
if(Seiral.available() > 0) {
    int nextByte = Serial.read();
    if(nextByte == THANKS_BYTE){
        //react every time receive the byte 10
        digitalWrite(13,LOW);
      }
  }

if (digitalRead(8) == HIGH) {
    Serial.write("pressed!");
    
  }else{
    Serial.write("not pressed!");
  }

}
