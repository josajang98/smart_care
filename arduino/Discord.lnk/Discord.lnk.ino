
#include <DHT.h> // DHT 라이브러리 호출
#include <DHT_U.h> 

#define DHTPIN1 10     //온습도 1번 센서 디지털 10번 포트 사용
#define DHTPIN2 11     //온습도 2번 센서 디지털 11번 포트 사용
#define DHTTYPE DHT11   // DHT11 온습도 센서 사용

DHT dht1(DHTPIN1, DHTTYPE); // DHT 설정 (8,DHT11)
DHT dht2(DHTPIN2, DHTTYPE); // DHT 설정 (9,DHT11) 

int irSensor1  = 2;     //적외선 감지 1번 센서 디지털 2번 포트 사용
int irSensor2  = 3;     //적외선 감지 2번 센서 디지털 3번 포트 사용
int irSensor3  = 4;     //적외선 감지 2번 센서 디지털 4번 포트 사용
int flameSensor  = 5;   //불꽃 감지 센서 디지털 5번 포트 사용
int mq135Sensor  = 6;   // 디지털 6번 포트 사용
int pirSensor1  = 7;    //인체 감지 1번 센서 디지털 7번 포트 사용
int pirSensor2  = 8;    //인체 감지 2번 센서 디지털 8번 포트 사용
int pirSensor3  = 9;    //인체 감지 2번 센서 디지털 9번 포트 사용


void setup() {
  Serial.begin(9600); //시리얼통신 9600
  dht1.begin(9600); //온습도 센서 세팅
  dht2.begin(9600);
  pinMode(irSensor1, INPUT); //센서 포트들 인풋으로 셋업
  pinMode(irSensor2, INPUT);
  pinMode(irSensor3, INPUT);
  pinMode(flameSensor, INPUT);
  pinMode(mq135Sensor, INPUT);
  pinMode(pirSensor1, INPUT);
  pinMode(pirSensor2, INPUT);
  pinMode(pirSensor3, INPUT);
}



void loop() {

  int irSensor1Value  =  digitalRead(irSensor1);
  int irSensor2Value = digitalRead(irSensor2);
  int irSensor3Value = digitalRead(irSensor3);
  int flameSensorValue  = digitalRead(flameSensor);
  int mq135SensorValue  = digitalRead(mq135Sensor);
  int pirSensor1Value  = digitalRead(pirSensor1);
  int pirSensor2Value  = digitalRead(pirSensor2);
  int pirSensor3Value  = digitalRead(pirSensor3);
  
  Serial.print(irSensor1Value);
  Serial.print(irSensor2Value); 
  Serial.print(irSensor3Value); 
  Serial.print(flameSensorValue);
  Serial.print(mq135SensorValue);
  
  Serial.print(pirSensor1Value);
  Serial.print(pirSensor2Value);
  Serial.print(pirSensor3Value);
  
  float h1 = dht1.readHumidity(); //습도값 저장
  float t1 = dht1.readTemperature(); //온도값 저장
  float h2 = dht2.readHumidity(); 
  float t2 = dht2.readTemperature();
  
  Serial.print(" ");
  Serial.print(h1,1); // 습도값 출력
  Serial.print(" ");
  Serial.print(t1,1); // 온도값 출력
  Serial.print(" ");
  Serial.print(h2,1); // 습도값 출력
  Serial.print(" ");
  Serial.print(t2,1); // 온도값 출력
  Serial.print(" ");
  
  delay(1000);
}
