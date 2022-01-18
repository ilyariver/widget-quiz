$$.form = function(options) {
	return {
		send(event) {
			let fields = {}
			let action = ''

			options.data.forEach(item => {
				fields[item.questions.fields] = item.questions.title
			})

			if (event.code === 'Enter' || event.code === 'NumpadEnter') {
				action = 'true'
				sendMail(event, action)
			}

			$('form').submit(function(event) {
				action = 'true'
				sendMail(event)
			})

			function sendMail(event, action) {
				console.log('submit')
				if (!event.target.classList.contains('js-form') && action === '') return
				event.preventDefault()
				// form data
				var form = $('.js-form')
				var formError = false
				// var formName = forms[];
				var formName = form.data('name')
				var formDataName = []
				var formDataSend = {
					name: forms[formName],
					fields: []
				}
				// fields data
				const receivedData = $$.receivedData

				receivedData.forEach((answer, i) => {
					const fieldsKeys = Object.keys(fields)
					formDataSend.fields.push(
						{
							name: fields[fieldsKeys[i]],
							value: typeof answer === 'object' ? answer.lastValue : answer
						}
					)
				})

				fields.name = 'Имя'
				fields.phone = 'Телефон'

				form.find('input, textarea, select').not('[type=\'file\']').each(function() {
					var field = $(this)
					var fieldName = field.attr('name')
					var fieldValue = field.val()

					if (fieldValue) {
						field.removeClass('field-error')
						formDataName.push(
							{
								name: fields[fieldName],
								value: fieldValue
							}
						)
					} else {
						formError = true
						field.addClass('field-error')
						document.querySelector('.js-send-form-btn').addEventListener('click', sendDataForm)
						document.addEventListener('keyup', sendDataForm)
					}
				})

				formDataSend.fields.unshift(...formDataName)

				if (!formError) {

					/* send calltouch */
					try {
						var fio = form.find('input[name="name"]').val()
						var phone = form.find('input[name="phone"]').val()
						var mail = form.find('input[name="email"]').val()
						var ct_site_id = '47217'
						var sub = forms[formName]
						var ct_data = {
							fio: fio,
							phoneNumber: phone,
							email: mail,
							subject: sub,
							sessionId: window.call_value
						}
						jQuery.ajax({
							url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/' + ct_site_id + '/register/',
							dataType: 'json', type: 'POST', data: ct_data, async: false
						})
					} catch (e) {
					}
					/* send calltouch */

					if (formName === 'hassmeta') {
						// отправка с файлом
						var http = new XMLHttpRequest(), f = this
						var th = $(this)
						event.preventDefault()
						// alert(th.find("input[name='name']").val().length);
						if (th.find('input[name=\'name\']').val().length && th.find('input[name=\'phone\']').val().length) {
							http.open('POST', 'php/mailsendfile.php', true)
							http.onreadystatechange = function() {
								if (http.readyState === 4 && http.status === 200) {
									// alert(http.responseText);
									openPopupSendOk()
									quiz.thankAlert()
									// аналитика
									setAnalytics(formName)
									if (http.responseText.indexOf(f.name.value) === 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
										th.trigger('reset')
									}
								}
							}
							http.onerror = function() {
								alert('Ошибка, попробуйте еще раз')
							}
							http.send(new FormData(f))
						} else {
							alert('Заполните все поля!')
						}
					} else {
						// отправка без файла
						axios({
							method: 'POST',
							headers: {
								// 'Content-Type': 'multipart/form-data'
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							url: '/php/mailsend.php',
							data: formDataSend
						})
							.then((response) => {
								// console.log('sendform', response);
								$.magnificPopup.close()
								setTimeout(function() {
									openPopupSendOk()
									quiz.thankAlert()
								}, 500)
								form.find('input, textarea').val('')
								quiz.close()
								// аналитика
								setAnalytics(formName)
							})
							.catch((error) => {
								console.log(error)
							})
					}
				}
			}
		},
		validate() {
			$(function($) {
				$('input[name=phone]').mask('+7(999)999-99-99')
			})
		},
	}
}
