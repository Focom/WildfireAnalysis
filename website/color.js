var tabPays = ['HI', 'AK', 'FL', 'SC', 'GA', 'AL', 'NC', 'TN', 'RI', 'CT', 'MA', 'ME', 'NH', 'VT', 'NY', 'NJ', 'PA', 'DE', 'MD', 'WV', 'KY', 'OH', 'MI', 'WY', 'MT', 'ID', 'WA', 'TX', 'CA', 'AZ', 'NV', 'UT', 'CO', 'NM', 'OR', 'ND', 'SD', 'NE', 'IA', 'MS', 'IN', 'IL', 'MN', 'WI', 'MO', 'AR', 'OK', 'KS', 'LA', 'VA', 'DC']
var scaleColor = chroma.scale('OrRd')

for (i = 0; i < tabPays.length; i++) {
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16)
	ca = document.querySelector('#' + tabPays[i])	
	ca.style.fill = scaleColor(Math.random())
}
