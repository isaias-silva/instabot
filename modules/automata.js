const webdriver = require('selenium-webdriver')
const user=require('../src/data/user.json')
const readline=require('readline-sync')
const asciiart=require('./asciiart')
const web=async function() {
console.log(asciiart.avisost())
    console.log(" | \u001b[31m  Não clique fora do navegador!\u001b[0m")
    let mail = user.n
    let pass =user.p
    const capabilities = {
        browserName: 'chrome'

    }
    const driver = await new webdriver.Builder().withCapabilities(capabilities).build()
    await driver.get("https://www.instagram.com/");
    await driver.sleep(4000)
    await driver.findElement(webdriver.By.xpath('//*[@name="username"]')).sendKeys(mail, webdriver.Key.LEFT);
    await driver.findElement(webdriver.By.xpath('//*[@name="password"]')).sendKeys(pass, webdriver.Key.ENTER);
    pass = ''
    await driver.sleep(4000)
    driver.get(`https://www.instagram.com/${mail}`)
    let desc = await driver.findElement(webdriver.By.className("QGPIr")).getText()
    desc = desc.split('\n')
    for (let i in desc) {
        await driver.findElement(webdriver.By.xpath('//*[@aria-label="Entrada da pesquisa"]')).sendKeys(desc[i], webdriver.Key.ENTER);
        await driver.sleep(4000)
        const alvo = await driver.findElements(webdriver.By.className('-qQT3'))

        await alvo[0].click()
        await driver.sleep(2000)
        const folo = await driver.findElements(webdriver.By.className('-nal3'))
        await folo[1].click()
        await driver.sleep(4000)
        const followers = await driver.findElements(webdriver.By.xpath('//button[@class="sqdOP  L3NKy   y3zKF     "]'))
        const followers2 = await driver.findElements(webdriver.By.xpath('//button[@class="sqdOP  L3NKy    _8A5w5    "]'))
        try{
        for(let x in followers){
           await followers[x].click()
           await driver.sleep(1000)
        }
    }catch{
        for(let y in followers2){
            await followers2[y].click()
            await driver.sleep(1000)
         }
    }
        await driver.navigate().back()
        await driver.navigate().back()

    }

await driver.close()


}
const search=async function() {
    console.log(asciiart.avisost())
        let mail = user.n
        let pass =user.p
        let desc = readline.question("digite a pesquisa: ")
        console.log("\u001b[31m  Não clique fora do navegador!\u001b[0m")
        const capabilities = {
            browserName: 'chrome'
    
        }
        const driver = await new webdriver.Builder().withCapabilities(capabilities).build()
        await driver.get("https://www.instagram.com/");
        await driver.sleep(4000)
        await driver.findElement(webdriver.By.xpath('//*[@name="username"]')).sendKeys(mail, webdriver.Key.LEFT);
        await driver.findElement(webdriver.By.xpath('//*[@name="password"]')).sendKeys(pass, webdriver.Key.ENTER);
        pass = ''
        await driver.sleep(4000)
        driver.get(`https://www.instagram.com/${mail}`)
     
     
            await driver.findElement(webdriver.By.xpath('//*[@aria-label="Entrada da pesquisa"]')).sendKeys(desc, webdriver.Key.ENTER);
            await driver.sleep(4000)
            const alvo = await driver.findElements(webdriver.By.className('-qQT3'))
    
            await alvo[0].click()
            await driver.sleep(2000)
            const folo = await driver.findElements(webdriver.By.className('-nal3'))
            await folo[1].click()
            await driver.sleep(4000)
            const followers = await driver.findElements(webdriver.By.xpath('//button[@class="sqdOP  L3NKy   y3zKF     "]'))
            const followers2 = await driver.findElements(webdriver.By.xpath('//button[@class="sqdOP  L3NKy    _8A5w5    "]'))
            try{
            for(let x in followers){
               await followers[x].click()
               await driver.sleep(1000)
            }
        }catch{
            for(let y in followers2){
                await followers2[y].click()
                await driver.sleep(1000)
             }
        }
            await driver.navigate().back()
            await driver.navigate().back()
    
        
    
    await driver.close()
    
    
    }
    const unfolo=async function(){
        console.log(asciiart.avisost())
        let mail = user.n
        let pass =user.p
      console.log("\u001b[31m  Não clique fora do navegador!\u001b[0m")
        const capabilities = {
            browserName: 'chrome'
    
        }
        const driver = await new webdriver.Builder().withCapabilities(capabilities).build()
        await driver.get("https://www.instagram.com/");
        await driver.sleep(4000)
        await driver.findElement(webdriver.By.xpath('//*[@name="username"]')).sendKeys(mail, webdriver.Key.LEFT);
        await driver.findElement(webdriver.By.xpath('//*[@name="password"]')).sendKeys(pass, webdriver.Key.ENTER);
        pass = ''
        await driver.sleep(4000)
        driver.get(`https://www.instagram.com/${mail}`)
     
             await driver.sleep(4000)
            const folo = await driver.findElements(webdriver.By.className('-nal3'))
            await folo[2].click()
            await driver.sleep(4000)
            const followers = await driver.findElements(webdriver.By.xpath('//button[@class="sqdOP  L3NKy    _8A5w5    "]'))
            console.log(`deixando de seguir ${followers.length} pessoas`)
            try{
            for(let x in followers){
               await followers[x].click()
               await driver.sleep(1000)
               const comfirm = await driver.findElement(webdriver.By.xpath('//button[@class="aOOlW -Cab_   "]'))
             await  comfirm.click()
            }
        }catch{
    
        console.log("erro")
        }
            await driver.navigate().back()
            await driver.navigate().back()
    
        
    
    await driver.close()
    
        
    }
module.exports={portema:web,porsearch:search,deixar:unfolo}