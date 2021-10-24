

function display(formulaire)
{
	if (formulaire.username.value=="Admin_GSB")
	{ 
		if (formulaire.password.value=="admin") 
		{              
			let a = document.createElement('a')
			a.href = "html.pdf"
			a.download = "html.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)

			a.href = "contact.pdf"
			a.download = "contact.pdf"
			document.body.appendChild(a)
			a.click();
			document.body.removeChild(a)

			a.href = "css1.pdf"
			a.download = "css1.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)

			a.href = "css2-converti.pdf"
			a.download = "css2-converti.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)

			a.href = "stage.pdf"
			a.download = "stage.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)


			
			a.href = "cours.pdf"
			a.download = "cours.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)


			a.href = "js.pdf"
			a.download = "js.pdf"
			document.body.appendChild(a)
			a.click()
			document.body.removeChild(a)

		  return true; 
		} 
		else
		{
		 alert("Invalid Password");
		 return false;
		}
	} 
	else 
		{  
			alert("Invalid Username");
			return false;
		}
}