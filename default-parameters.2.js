// default-parameters.2.js
function t (fogLevel = 1, sparkLevel = fogLevel) {
  console.log(`Fog Level: ${fogLevel} and spark_level: ${sparkLevel}`)
  // Fog Level: 10 and spark_level: 10
}

function s (fogLevel = 10, sparkLevel = fogLevel * 10) {
  console.log(`Fog Level: ${fogLevel} and spark_level:
       ${sparkLevel}`)
  // Fog Level: 10 and spark_level: 100
}
t(10)
s(10)
