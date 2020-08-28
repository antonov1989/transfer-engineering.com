<div id="calculation" class="calculation">
    <h3 class="text-center">Расчет стоимости игры</h3>
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
            <div class="form-group">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" value="1" checked id="modeStandart" name="mode" class="custom-control-input">
                  <label class="custom-control-label" for="modeStandart">Предложение "Стандарт"</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" value="2" id="modeXball" name="mode" class="custom-control-input">
                  <label class="custom-control-label" for="modeXball">Предложение "transfer-engineering.com.ua"</label>
                </div>
            </div>
            <div class="form-group">
                <label for="userCount">Количество шаров</label>
                <select id="userCount" class="calc_price form-control">
                    <option value="6">6 шаров</option>
                    <option value="8">8 шаров</option>
                    <option value="10" selected>10 шаров</option>
                    <option value="12">12 шаров</option>
                </select>
            </div>
            <div class="form-group">
                <label for="userDuration">Продолжительность игры</label>
                <input id="userDuration" class="form-control" type="number" min="1" value="1" step="0.5">
                <small id="userDurationHelp" class="form-text text-muted">в часах</small>
            </div>
            <div class="form-check">
                <input class="calc_price form-check-input" type="checkbox" value="" id="useVideo">
                <label class="calc_price form-check-label" for="useVideo">
                    Видеосъемка +250 грн/ч
                </label>
            </div>
            <div class="form-check">
                <input class="calc_price form-check-input" type="checkbox" value="" id="yourStadium">
                <label class="calc_price form-check-label" for="yourStadium">
                    Ваше поле -300 грн/ч
                </label>
            </div>
            <br>
            <button id="CalcPrice" type="button" class="btn btn-success" onClick="calcPrice()">Рассчитать стоимость</button>
        </div>
        <div class="col-sm-4 pt-4">
            <div id="priceResult" class="priceResult text-center">
                Стоимость <div> </div> 
            </div>
        </div>
    </div>
    <script type="text/javascript">
        function calcPrice() {
            var priceResult = document.getElementById('priceResult');
            var mode = document.querySelector('input[name="mode"]:checked').value;
            var userCount = document.getElementById('userCount').value;
            
            var priceSale = {1: 30, 2: 50};
            var priceMode = {
                1: {
                    6: 1599,
                    8: 1699,
                    10: 1799,
                    12: 1899,
                },
                2: {
                    6: 2199,
                    8: 2299,
                    10: 2399,
                    12: 2499,
                }
            };
            
            var price = 0;
            var priceByHour = priceMode[mode][userCount];
            
            // culc price by duration
            var userDuration = document.getElementById('userDuration').value;
            price += priceByHour;
            if (userDuration > 1) {
                var priceWithSale = priceByHour - (priceSale[mode] * priceByHour / 100);
                price += (priceWithSale * (userDuration - 1));
            }
            
            if (document.getElementById("useVideo").checked) {
                price += (250 * userDuration);
            }
            if (document.getElementById("yourStadium").checked) {
                price -= (300 * userDuration);
            }
            
            var priceResult = document.getElementById('priceResult').getElementsByTagName('div')[0];
            priceResult.innerHTML = (Math.round(price) + ' грн');
        }
    </script>
</div>