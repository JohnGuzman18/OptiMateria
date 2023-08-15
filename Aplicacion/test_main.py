from selenium import webdriver
from selenium.webdriver.common.by import By
import unittest
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
 
 # La variable Nav. es Navegador abreviado.
class Test1(unittest.TestCase):
    def setUp(nav):
       nav.driver = webdriver.Edge() 

    def url (nav):
        url = nav.driver.get("http://127.0.0.1:5500/Aplicacion/index.html")
        return url   
    
    # Llenar el fomurlario
    def test_01_form(nav):
        
        nav.url()
       
        nav.form = nav.driver.find_element(By.ID, 'inputNombre')
        nav.form.click()
        nav.form.send_keys("John Guzman")

        nav.form = nav.driver.find_element(By.ID, 'inputProvincia')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputCiudad')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputSector')
        nav.form.click()
        nav.form.send_keys("Arroyo Hondo")

        nav.form = nav.driver.find_element(By.ID, 'inputCalle')
        nav.form.click()
        nav.form.send_keys("Rep. de colombia")

        nav.form = nav.driver.find_element(By.ID, 'inputCarreras')
        nav.form.click()
        nav.form = nav.driver.find_element(By.XPATH,'//*[@id="inputCarreras"]/option[3]').click()
        time.sleep(3)
        
    # Prueba de error de campo vacio
    def test_02_campo_vacio(nav):

        nav.url()
        nav.form = nav.driver.find_element(By.ID, 'inputNombre')
        nav.form.click()
        nav.form.send_keys("John Guzman")

        nav.form = nav.driver.find_element(By.ID, 'inputProvincia')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputCiudad')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputSector')
        nav.form.click()
        nav.form.send_keys("Arroyo Hondo")


        nav.form = nav.driver.find_element(By.ID, 'inputCarreras')
        nav.form.click()
        nav.form = nav.driver.find_element(By.XPATH,'//*[@id="inputCarreras"]/option[3]').click()

        nav.form = nav.driver.find_element(By.ID, 'btn-siguiente').click()
        time.sleep(3)

    #Prueba del boton limpiar
    def test_03_btnClean(nav):
        
        nav.url()
       
        nav.form = nav.driver.find_element(By.ID, 'inputNombre')
        nav.form.click()
        nav.form.send_keys("John Guzman")

        nav.form = nav.driver.find_element(By.ID, 'inputProvincia')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputCiudad')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputSector')
        nav.form.click()
        nav.form.send_keys("Arroyo Hondo")

        nav.form = nav.driver.find_element(By.ID, 'inputCalle')
        nav.form.click()
        nav.form.send_keys("Rep. de colombia")

        nav.form = nav.driver.find_element(By.ID, 'inputCarreras')
        nav.form.click()
        nav.form = nav.driver.find_element(By.XPATH,'//*[@id="inputCarreras"]/option[3]').click()
        
        nav.form = nav.driver.find_element(By.ID, 'btn-limpiar').click()
        time.sleep(3)

    #Boton de home
    def test_04_btnHome(nav):
        
        nav.url()
       
        nav.form = nav.driver.find_element(By.ID, 'inputNombre')
        nav.form.click()
        nav.form.send_keys("John Guzman")

        nav.form = nav.driver.find_element(By.ID, 'inputProvincia')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputCiudad')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputSector')
        nav.form.click()
        nav.form.send_keys("Arroyo Hondo")

        nav.form = nav.driver.find_element(By.ID, 'inputCalle')
        nav.form.click()
        nav.form.send_keys("Rep. de colombia")

        nav.form = nav.driver.find_element(By.ID, 'inputCarreras')
        nav.form.click()
        nav.form = nav.driver.find_element(By.XPATH,'//*[@id="inputCarreras"]/option[3]').click()
        nav.form = nav.driver.find_element(By.ID, 'btn-siguiente').click()
        time.sleep(3)
        nav.form = nav.driver.find_element(By.XPATH,'//*[@id="ol-actual-page"]/li[1]/a').click()

        #Registro completo
    def test_05_Registro_completo(nav):
        
        nav.url()
       
        nav.form = nav.driver.find_element(By.ID, 'inputNombre')
        nav.form.click()
        nav.form.send_keys("John Guzman")

        nav.form = nav.driver.find_element(By.ID, 'inputProvincia')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputCiudad')
        nav.form.click()
        nav.form.send_keys("Santo Domingo")

        nav.form = nav.driver.find_element(By.ID, 'inputSector')
        nav.form.click()
        nav.form.send_keys("Arroyo Hondo")

        nav.form = nav.driver.find_element(By.ID, 'inputCalle')
        nav.form.click()
        nav.form.send_keys("Rep. de colombia")

        nav.form = nav.driver.find_element(By.ID, 'inputCarreras')
        nav.form.click()
        nav.form = nav.driver.find_element(By.XPATH,'//*[@id="inputCarreras"]/option[3]').click()
        nav.form = nav.driver.find_element(By.ID, 'btn-siguiente').click()
        nav.form = nav.driver.find_element(By.ID,'horario-1').click()
        nav.form = nav.driver.find_element(By.ID,'horario-2').click()
        nav.form = nav.driver.find_element(By.ID,'horario-3').click()
        nav.form = nav.driver.find_element(By.ID,'horario-4').click()
        nav.form = nav.driver.find_element(By.ID,'horario-5').click()
        nav.form = nav.driver.find_element(By.ID,'btn-sen').click()
        nav.form = nav.driver.find_element(By.XPATH,'//*[@id="resultadoFinal"]/button[1]').click()
        time.sleep(3)


        

        