var email = "example@email.com"




var messages = document.querySelector("#messages")
window.addEventListener('load', function () {   
function ohno(button) {
      setTimeout(function () {
        (function () {
          var overlay = document.createElement('div');
          overlay.style.position = 'fixed';
          overlay.style.top = '0';
          overlay.style.left = '0';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
          overlay.style.zIndex = '9999';
          overlay.style.transition = 'background-color 0.15s ease-in-out';

          var windowElement = document.createElement('div');
          windowElement.style.position = 'fixed';
          windowElement.style.top = '50%';
          windowElement.style.left = '50%';
          windowElement.style.transform = 'translate(-50%, -50%) scale(0)';
          windowElement.style.width = '400px';
          windowElement.style.height = '200px';
          windowElement.style.backgroundColor = 'rgb(16 16 16)';
          windowElement.style.borderRadius = '10px';
          windowElement.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4)';
          windowElement.style.zIndex = '10000';
          windowElement.style.transition = 'transform 0.15s ease-in-out';

          var titleBar = document.createElement('div');
          titleBar.style.padding = '10px 20px';
          titleBar.style.backgroundColor = 'rgb(13 13 13)';
          titleBar.style.borderRadius = '10px 10px 0 0';
          titleBar.style.color = '#fff';
          titleBar.style.fontWeight = 'bold';
          titleBar.style.cursor = 'move';
          titleBar.textContent = 'Backdoor AI System Notification';
          titleBar.style.fontFamily = 'Quicksand, sans-serif';

          var closeButton = document.createElement('button');
          closeButton.style.position = 'absolute';
          closeButton.style.bottom = '10px';
          closeButton.style.left = '50%';
          closeButton.style.transform = 'translateX(-50%)';
          closeButton.style.padding = '10px 20px';
          closeButton.style.backgroundColor = '#007bff';
          closeButton.style.color = '#fff';
          closeButton.style.border = 'none';
          closeButton.style.borderRadius = '42px';
          closeButton.style.cursor = 'pointer';
          closeButton.textContent = 'Confirm';
          closeButton.style.fontFamily = 'Quicksand, sans-serif';

          var content = document.createElement('div');
          content.style.display = 'flex';
          content.style.justifyContent = 'center';
          content.style.alignItems = 'center';
          content.style.height = '40%';
          content.style.color = '#fff';
          content.style.padding = '0 20px';
          content.textContent = 'We are aware of issues where the message box buttons do not appear on desktop browsers. A fix will be implemented soon.';
          content.style.fontFamily = 'Quicksand, sans-serif';

          closeButton.addEventListener('click', function () {
            windowElement.style.transform = 'translate(-50%, -50%) scale(0)';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            setTimeout(function () {
              document.body.removeChild(overlay);
            }, 150);
          });

          var isDragging = false;
          var offsetX = 0;
          var offsetY = 0;

          titleBar.addEventListener('mousedown', function (e) {
            isDragging = true;
            offsetX = e.clientX - windowElement.offsetLeft;
            offsetY = e.clientY - windowElement.offsetTop;
          });

          titleBar.addEventListener('touchstart', function (e) {
            isDragging = true;
            var touch = e.touches[0];
            offsetX = touch.clientX - windowElement.offsetLeft;
            offsetY = touch.clientY - windowElement.offsetTop;
          });

          document.addEventListener('mousemove', function (e) {
            if (isDragging) {
              windowElement.style.left = e.clientX - offsetX + 'px';
              windowElement.style.top = e.clientY - offsetY + 'px';
            }
          });

          document.addEventListener('touchmove', function (e) {
            if (isDragging) {
              var touch = e.touches[0];
              windowElement.style.left = touch.clientX - offsetX + 'px';
              windowElement.style.top = touch.clientY - offsetY + 'px';
            }
          });

          document.addEventListener('mouseup', function () {
            isDragging = false;
          });

          document.addEventListener('touchend', function () {
            isDragging = false;
          });

          setTimeout(function () {
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            windowElement.style.transform = 'translate(-50%, -50%) scale(1)';
          }, 100);

          windowElement.appendChild(titleBar);
          windowElement.appendChild(content);
          windowElement.appendChild(closeButton);
          overlay.appendChild(windowElement);
          document.body.appendChild(overlay);
        })();
      }, 300);
    }
    ohno();
    function TN(button) {
      window.location.href = 'https://backdoor.best/proxy.html';
    }
    function Spy(button) {
      window.location.href = 'https://backdoor.best/chat.html';
    }
    function isMobileDevice() {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    function hideElementsOnMobile() {
      if (isMobileDevice()) {
        var buttons = document.querySelectorAll('.button-container .button');
        buttons.forEach(function (button) {
          button.classList.add('hidden');
        });

        document.querySelector('.header h1').textContent = 'bd.ai';
        document.querySelector('.header p').textContent = 'Simple AI Chat';

        setupTextareaTouch();
      }
    }

    function setupTextareaTouch() {
      var startTouchTime = 0;
      var messageInput = document.getElementById('messageInput');

      messageInput.addEventListener('touchstart', function (event) {
        startTouchTime = Date.now();
      });

      messageInput.addEventListener('touchend', function (event) {
        var touchDuration = Date.now() - startTouchTime;
        if (touchDuration >= 400) {
          clearMessages();
          refreshUserId();
        }
      });
    }
    function clearMessages() {
      console.log('Messages cleared');
    }

    function refreshUserId() {
      console.log('User ID refreshed');
    }

    hideElementsOnMobile();
    document.getElementById('messageInput').addEventListener('paste', function (e) {
      let paste = (e.clipboardData || window.clipboardData).getData('text');
      let currentValue = e.target.value;
      let maxLength = e.target.getAttribute('maxlength');
      let remainingChars = maxLength - currentValue.length;
      if (paste.length > remainingChars) {
        paste = paste.substring(0, remainingChars);
      }
      e.preventDefault();
      document.execCommand("insertText", false, paste);
      sizeDown();
    });
    window.addEventListener('load', function () {
      refreshUserId();
    });
    function custom23(button) {
      setTimeout(function () {
        (function () {
          var overlay = document.createElement('div');
          overlay.style.position = 'fixed';
          overlay.style.top = '0';
          overlay.style.left = '0';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
          overlay.style.zIndex = '9999';
          overlay.style.transition = 'background-color 0.15s ease-in-out';

          var windowElement = document.createElement('div');
          windowElement.style.position = 'fixed';
          windowElement.style.top = '50%';
          windowElement.style.left = '50%';
          windowElement.style.transform = 'translate(-50%, -50%) scale(0)';
          windowElement.style.width = '400px';
          windowElement.style.height = '200px';
          windowElement.style.backgroundColor = 'rgb(16 16 16)';
          windowElement.style.borderRadius = '10px';
          windowElement.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4)';
          windowElement.style.zIndex = '10000';
          windowElement.style.transition = 'transform 0.15s ease-in-out';

          var titleBar = document.createElement('div');
          titleBar.style.padding = '10px 20px';
          titleBar.style.backgroundColor = 'rgb(13 13 13)';
          titleBar.style.borderRadius = '10px 10px 0 0';
          titleBar.style.color = '#fff';
          titleBar.style.fontWeight = 'bold';
          titleBar.style.cursor = 'move';
          titleBar.textContent = 'Backdoor AI';
          titleBar.style.fontFamily = 'Quicksand, sans-serif';

          var closeButton = document.createElement('button');
          closeButton.style.position = 'absolute';
          closeButton.style.bottom = '10px';
          closeButton.style.left = '50%';
          closeButton.style.transform = 'translateX(-50%)';
          closeButton.style.padding = '10px 20px';
          closeButton.style.backgroundColor = '#007bff';
          closeButton.style.color = '#fff';
          closeButton.style.border = 'none';
          closeButton.style.borderRadius = '42px';
          closeButton.style.cursor = 'pointer';
          closeButton.textContent = 'Confirm';
          closeButton.style.fontFamily = 'Quicksand, sans-serif';

          var content = document.createElement('div');
          content.style.display = 'flex';
          content.style.justifyContent = 'center';
          content.style.alignItems = 'center';
          content.style.height = '40%';
          content.style.color = '#fff';
          content.style.padding = '0 20px';
          content.textContent = 'Press CTRL + B or CTRL + X or CTRL + SPACE or CTRL + ALT to clear chat. Press ENTER to send messages. Press / to focus on the message box.';
          content.style.fontFamily = 'Quicksand, sans-serif';

          closeButton.addEventListener('click', function () {
            windowElement.style.transform = 'translate(-50%, -50%) scale(0)';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            setTimeout(function () {
              document.body.removeChild(overlay);
            }, 150);
          });

          var isDragging = false;
          var offsetX = 0;
          var offsetY = 0;

          titleBar.addEventListener('mousedown', function (e) {
            isDragging = true;
            offsetX = e.clientX - windowElement.offsetLeft;
            offsetY = e.clientY - windowElement.offsetTop;
          });

          titleBar.addEventListener('touchstart', function (e) {
            isDragging = true;
            var touch = e.touches[0];
            offsetX = touch.clientX - windowElement.offsetLeft;
            offsetY = touch.clientY - windowElement.offsetTop;
          });

          document.addEventListener('mousemove', function (e) {
            if (isDragging) {
              windowElement.style.left = e.clientX - offsetX + 'px';
              windowElement.style.top = e.clientY - offsetY + 'px';
            }
          });

          document.addEventListener('touchmove', function (e) {
            if (isDragging) {
              var touch = e.touches[0];
              windowElement.style.left = touch.clientX - offsetX + 'px';
              windowElement.style.top = touch.clientY - offsetY + 'px';
            }
          });

          document.addEventListener('mouseup', function () {
            isDragging = false;
          });

          document.addEventListener('touchend', function () {
            isDragging = false;
          });

          setTimeout(function () {
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            windowElement.style.transform = 'translate(-50%, -50%) scale(1)';
          }, 100);

          windowElement.appendChild(titleBar);
          windowElement.appendChild(content);
          windowElement.appendChild(closeButton);
          overlay.appendChild(windowElement);
          document.body.appendChild(overlay);
        })();
      }, 300);
    }
    function custom1(button) {
      sizeDown(button);
      setTimeout(() => {
        /* start */
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        overlay.style.zIndex = '9999';
        document.body.appendChild(overlay);

        overlay.animate([
          {opacity: '0'},
          {opacity: '0.5'}
        ], {
          duration: 500,
          easing: 'ease-in-out',
          fill: 'forwards'
        });

        setTimeout(() => {
          const container = document.createElement('div');
          container.style.position = 'fixed';
          container.style.top = '50%';
          container.style.left = '50%';
          container.style.transform = 'translate(-50%, -50%) scale(0)';
          container.style.width = '650px';
          container.style.height = '350px';
          container.style.backgroundColor = '#ffffff';
          container.style.borderRadius = '10px';
          container.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.3)';
          container.style.zIndex = '10000';
          container.style.overflow = 'hidden';
          document.body.appendChild(container);

          container.animate([
            {transform: 'translate(-50%, -50%) scale(0)'},
            {transform: 'translate(-50%, -50%) scale(1)'}
          ], {
            duration: 500,
            easing: 'ease-in-out',
            fill: 'forwards'
          });

          const iframe = document.createElement('iframe');
          iframe.src = 'https://backdoor.best/chatgpt.html';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.border = 'none';
          container.appendChild(iframe);

          const closeButton = document.createElement('button');
          closeButton.textContent = 'X';
          closeButton.style.position = 'absolute';
          closeButton.style.top = '10px';
          closeButton.style.right = '10px';
          closeButton.style.backgroundColor = '#4d4d4d';
          closeButton.style.color = '#ffffff';
          closeButton.style.border = 'none';
          closeButton.style.borderRadius = '25%';
          closeButton.style.width = '40px';
          closeButton.style.height = '40px';
          closeButton.style.fontFamily = 'Quicksand, sans-serif';
          closeButton.style.fontSize = '1.5rem';
          closeButton.style.cursor = 'pointer';
          container.appendChild(closeButton);

          closeButton.addEventListener('click', () => {
            overlay.animate([
              {opacity: '0.5'},
              {opacity: '0'}
            ], {
              duration: 500,
              easing: 'ease-in-out',
              fill: 'forwards'
            });

            container.animate([
              {transform: 'translate(-50%, -50%) scale(1)'},
              {transform: 'translate(-50%, -50%) scale(0)'}
            ], {
              duration: 500,
              easing: 'ease-in-out',
              fill: 'forwards'
            });

            setTimeout(() => {
              document.body.removeChild(overlay);
              document.body.removeChild(container);
            }, 500);
          });
        }, 300);
        /* end */
      }, 600);
    }
    function delayedAlert(button) {
      setTimeout(function () {
      (function () {
          var overlay = document.createElement('div');
          overlay.style.position = 'fixed';
          overlay.style.top = '0';
          overlay.style.left = '0';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
          overlay.style.zIndex = '9999';
          overlay.style.transition = 'background-color 0.15s ease-in-out';

          var windowElement = document.createElement('div');
          windowElement.style.position = 'fixed';
          windowElement.style.top = '50%';
          windowElement.style.left = '50%';
          windowElement.style.transform = 'translate(-50%, -50%) scale(0)';
          windowElement.style.width = '400px';
          windowElement.style.height = '200px';
          windowElement.style.backgroundColor = 'rgb(16 16 16)';
          windowElement.style.borderRadius = '10px';
          windowElement.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4)';
          windowElement.style.zIndex = '10000';
          windowElement.style.transition = 'transform 0.15s ease-in-out';

          var titleBar = document.createElement('div');
          titleBar.style.padding = '10px 20px';
          titleBar.style.backgroundColor = 'rgb(13 13 13)';
          titleBar.style.borderRadius = '10px 10px 0 0';
          titleBar.style.color = '#fff';
          titleBar.style.fontWeight = 'bold';
          titleBar.style.cursor = 'move';
          titleBar.textContent = 'Backdoor AI';
          titleBar.style.fontFamily = 'Quicksand, sans-serif';

          var closeButton = document.createElement('button');
          closeButton.style.position = 'absolute';
          closeButton.style.bottom = '10px';
          closeButton.style.left = '50%';
          closeButton.style.transform = 'translateX(-50%)';
          closeButton.style.padding = '10px 20px';
          closeButton.style.backgroundColor = '#007bff';
          closeButton.style.color = '#fff';
          closeButton.style.border = 'none';
          closeButton.style.borderRadius = '42px';
          closeButton.style.cursor = 'pointer';
          closeButton.textContent = 'Confirm';
          closeButton.style.fontFamily = 'Quicksand, sans-serif';

          var content = document.createElement('div');
          content.style.display = 'flex';
          content.style.justifyContent = 'center';
          content.style.alignItems = 'center';
          content.style.height = '40%';
          content.style.color = '#fff';
          content.style.padding = '0 20px';
          content.textContent = `Contact ${email} for assistance. The owner does not own a Discord account.`;
          content.style.fontFamily = 'Quicksand, sans-serif';

          closeButton.addEventListener('click', function () {
            windowElement.style.transform = 'translate(-50%, -50%) scale(0)';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            setTimeout(function () {
              document.body.removeChild(overlay);
            }, 150);
          });

          var isDragging = false;
          var offsetX = 0;
          var offsetY = 0;

          titleBar.addEventListener('mousedown', function (e) {
            isDragging = true;
            offsetX = e.clientX - windowElement.offsetLeft;
            offsetY = e.clientY - windowElement.offsetTop;
          });

          titleBar.addEventListener('touchstart', function (e) {
            isDragging = true;
            var touch = e.touches[0];
            offsetX = touch.clientX - windowElement.offsetLeft;
            offsetY = touch.clientY - windowElement.offsetTop;
          });

          document.addEventListener('mousemove', function (e) {
            if (isDragging) {
              windowElement.style.left = e.clientX - offsetX + 'px';
              windowElement.style.top = e.clientY - offsetY + 'px';
            }
          });

          document.addEventListener('touchmove', function (e) {
            if (isDragging) {
              var touch = e.touches[0];
              windowElement.style.left = touch.clientX - offsetX + 'px';
              windowElement.style.top = touch.clientY - offsetY + 'px';
            }
          });

          document.addEventListener('mouseup', function () {
            isDragging = false;
          });

          document.addEventListener('touchend', function () {
            isDragging = false;
          });

          setTimeout(function () {
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            windowElement.style.transform = 'translate(-50%, -50%) scale(1)';
          }, 100);

          windowElement.appendChild(titleBar);
          windowElement.appendChild(content);
          windowElement.appendChild(closeButton);
          overlay.appendChild(windowElement);
          document.body.appendChild(overlay);
        })();
      }, 300);
    }
    document.getElementById('messageInput').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitButton();
      }
    });

    function sizeDown(element) {
      element.style.transition = 'transform 0.2s';
      element.style.transform = 'scale(0.9)';
      setTimeout(() => {
        element.style.transition = 'transform 0.2s';
        element.style.transform = 'scale(1)';
      }, 200);
    }

    function submitButton(button) {
      const message = document.getElementById('messageInput').value.trim();
      if (message !== '' && !document.querySelector(".countdown")) {
        sendMessage(message);
        document.querySelectorAll('.button').forEach(button => {
          button.classList.add('fade-out');
        });
        
      }
    }

    var countdownInterval;
    function sendMessage(message) {
      const messageContainer = document.getElementById('messageContainer');
      let pageLoadId = localStorage.getItem('pageLoadId');
      if (!pageLoadId) {
        pageLoadId = Math.floor(10000000000 + Math.random() * 90000000000);
        localStorage.setItem('pageLoadId', pageLoadId);
      }
      const messageElement = document.createElement('div');
      messageElement.classList.add('message-blue');
      messageElement.innerText = message;
      messageContainer.insertBefore(messageElement, document.getElementById('messageInput'));
      document.getElementById('messageInput').value = '';
      const countdownContainer = document.createElement('div');
      countdownContainer.classList.add('countdown-container');
      messageElement.appendChild(messageContainer);
      const countdownElement = document.createElement('div');
      countdownElement.classList.add('countdown', 'size-up-animation');
      countdownElement.innerText = 'Generating an AI Response... 0.0s';
      countdownElement.style.fontSize = '18px';
      countdownElement.style.color = '#808080';
      countdownElement.style.top = '15%';
      countdownElement.stylhe.right = '15%';
      countdownContainer.appendChild(countdownElement);

      let countdownTime = 0.1;
      countdownInterval = setInterval(() => {
        countdownElement.innerText = `Generating an AI Response... ${countdownTime.toFixed(1)}s`;
        countdownTime += 0.1;
      }, 100);
      
      messageContainer.insertBefore(messages, messageElement);

      messageContainer.scrollTop = messageContainer.scrollHeight;
      //add thing here to recieve message thing
    }
    function receiveMessage(message) {
      const messageContainer = document.getElementById('messageContainer');
      const messageElement   = document.createElement('div');
      messageElement.classList.add('message-gray');
      messageContainer.insertBefore(messages, messageElement);
      messageElement.innerText = message;
      if (document.querySelector(".countdown")) {
        clearInterval(countdownInterval)
        document.querySelector(".countdown").remove()
      }
      console.log(messageElement)
      if (message.length > 50) {
      }
    }

    function buttonClick(button) {
      sizeDown(button);
      setTimeout(() => {
        javascript: (function () {
          var overlay = document.createElement('div');
          overlay.style.position = 'fixed';
          overlay.style.top = '0';
          overlay.style.left = '0';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
          overlay.style.zIndex = '9999';
          overlay.style.transition = 'background-color 0.15s ease-in-out';

          var windowElement = document.createElement('div');
          windowElement.style.position = 'fixed';
          windowElement.style.top = '50%';
          windowElement.style.left = '50%';
          windowElement.style.transform = 'translate(-50%, -50%) scale(0)';
          windowElement.style.width = '400px';
          windowElement.style.height = '200px';
          windowElement.style.backgroundColor = 'rgb(16 16 16)';
          windowElement.style.borderRadius = '10px';
          windowElement.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.4)';
          windowElement.style.zIndex = '10000';
          windowElement.style.transition = 'transform 0.15s ease-in-out';

          var titleBar = document.createElement('div');
          titleBar.style.padding = '10px 20px';
          titleBar.style.backgroundColor = 'rgb(13 13 13)';
          titleBar.style.borderRadius = '10px 10px 0 0';
          titleBar.style.color = '#fff';
          titleBar.style.fontWeight = 'bold';
          titleBar.style.cursor = 'move';
          titleBar.textContent = 'Backdoor AI';
          titleBar.style.fontFamily = 'Quicksand, sans-serif';
          var closeButton = document.createElement('button');
          closeButton.style.position = 'absolute';
          closeButton.style.bottom = '10px';
          closeButton.style.left = '50%';
          closeButton.style.transform = 'translateX(-50%)';
          closeButton.style.padding = '10px 20px';
          closeButton.style.backgroundColor = 'rgb(12 95 185)';
          closeButton.style.color = '#fff';
          closeButton.style.border = 'none';
          closeButton.style.borderRadius = '42px';
          closeButton.style.cursor = 'pointer';
          closeButton.textContent = 'Confirm';
          closeButton.style.fontFamily = 'Quicksand, sans-serif';
          var content = document.createElement('div');
          content.style.display = 'flex';
          content.style.justifyContent = 'center';
          content.style.alignItems = 'center';
          content.style.height = '40%';
          content.style.color = '#fff';
          content.style.padding = '0 20px';
          content.textContent = 'This feature is still being worked on. Sorry about that.';
          content.style.fontFamily = 'Quicksand, sans-serif';
          closeButton.addEventListener('click', function () {
            windowElement.style.transform = 'translate(-50%, -50%) scale(0)';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            setTimeout(function () {
              document.body.removeChild(overlay);
            }, 150);
          });

          var isDragging = false;
          var offsetX = 0;
          var offsetY = 0;

          titleBar.addEventListener('mousedown', function (e) {
            isDragging = true;
            offsetX = e.clientX - windowElement.offsetLeft;
            offsetY = e.clientY - windowElement.offsetTop;
          });

          titleBar.addEventListener('touchstart', function (e) {
            isDragging = true;
            var touch = e.touches[0];
            offsetX = touch.clientX - windowElement.offsetLeft;
            offsetY = touch.clientY - windowElement.offsetTop;
          });

          document.addEventListener('mousemove', function (e) {
            if (isDragging) {
              windowElement.style.left = e.clientX - offsetX + 'px';
              windowElement.style.top = e.clientY - offsetY + 'px';
            }
          });

          document.addEventListener('touchmove', function (e) {
            if (isDragging) {
              var touch = e.touches[0];
              windowElement.style.left = touch.clientX - offsetX + 'px';
              windowElement.style.top = touch.clientY - offsetY + 'px';
            }
          });

          document.addEventListener('mouseup', function () {
            isDragging = false;
          });

          document.addEventListener('touchend', function () {
            isDragging = false;
          });

          setTimeout(function () {
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            windowElement.style.transform = 'translate(-50%, -50%) scale(1)';
          }, 100);

          windowElement.appendChild(titleBar);
          windowElement.appendChild(content);
          windowElement.appendChild(closeButton);
          overlay.appendChild(windowElement);
          document.body.appendChild(overlay);
        })();
      }, 600);
    }

    document.addEventListener("DOMContentLoaded", function () {
      function focusOnTextarea() {
        document.getElementById("messageInput").focus();
      }
      focusOnTextarea();
      document.addEventListener("keydown", function (event) {
        if (event.key === "/" && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {
          focusOnTextarea();
          event.preventDefault();
        }
      });
    });
    document.addEventListener('keydown', function (event) {
      const isCtrlB = event.key === 'b' && (event.ctrlKey || event.metaKey);
      const isCtrlAlt = event.ctrlKey && event.altKey && !event.metaKey;
      const isCtrlSpace = event.key === ' ' && event.ctrlKey && !event.metaKey;
      const isCtrlX = event.key === 'x' && event.ctrlKey && !event.metaKey;
      if (isCtrlB || isCtrlAlt || isCtrlSpace || isCtrlX) {
        const messageInput = document.getElementById('messageInput');
        sizeDown(messageInput);
        clearMessages();
        refreshUserId();
      }
    });
    function custom2(button) {
      sizeDown(button);
      setTimeout(() => {
        refreshUserId();
      }, 100);
    }

    function refreshUserId() {
      const newPageLoadId = Math.floor(10000000000 + Math.random() * 90000000000);
      localStorage.setItem('pageLoadId', newPageLoadId);
    }

    function clearMessages() {
      const messages = document.querySelectorAll('.message-blue, .message-gray');
      messages.forEach(message => {
        message.classList.add('fade-out');
        setTimeout(() => {
          message.remove();
          const buttons = document.querySelectorAll('.button');
          buttons.forEach(button => {
            button.classList.remove('fade-out');
            button.classList.add('sizeUp');
          });
        }, 500);
      });
    }
  }
);