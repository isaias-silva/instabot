const webdriver=require('selenium-webdriver')
const readline=require('readline-sync')
async function web(){

    let mail=readline.question('nome de usuário: ')
    let pass=readline.question('senha: ',)
    const capabilities = {
        browserName: 'firefox'
        
       
        
    }
    const driver = await new webdriver.Builder().withCapabilities(capabilities).build()
    await driver.get("https://www.instagram.com/");
    await driver.sleep(4000)
    await driver.findElement(webdriver.By.xpath('//*[@name="username"]')).sendKeys(mail, webdriver.Key.LEFT);
    await driver.findElement(webdriver.By.xpath('//*[@name="password"]')).sendKeys(pass, webdriver.Key.ENTER);
    pass=''
    await driver.sleep(4000)
    driver.get(`https://www.instagram.com/${mail}`)
     let desc=  await driver.findElement(webdriver.By.className("QGPIr")).getText()
    desc=desc.split('\n')
for(let i in desc){
 
    await driver.findElement(webdriver.By.xpath('//*[@aria-label="Entrada da pesquisa"]')).sendKeys(desc[i], webdriver.Key.ENTER);
   await driver.sleep(4000)
   const alvo= await driver.findElements(webdriver.By.className('-qQT3'))

    await alvo[0].click()
    await driver.sleep(2000)
    const folo= await driver.findElements(webdriver.By.className('-nal3'))
    await folo[1].click()
  
    await driver.sleep(2000)
    await driver.navigate().back()
    
}


    
  
}
web()