
        // Array to store disbursements
        let disbursements = [];

        // Function to add disbursement
        function addDisbursement() {
            const recipient = document.getElementById('recipient').value;
            const amount = parseFloat(document.getElementById('amount').value);

            // Validate input
            if (!recipient || isNaN(amount) || amount <= 0) {
                alert('Please enter valid recipient name and amount.');
                return;
            }

            // Add disbursement to array
            disbursements.push({ recipient, amount });

            // Update disbursements list
            updateDisbursementsList();
        }

        // Function to update disbursements list
        function updateDisbursementsList() {
            const disbursementsList = document.getElementById('disbursements');
            disbursementsList.innerHTML = '';
            disbursements.forEach(disbursement => {
                const li = document.createElement('li');
                li.textContent = `${disbursement.recipient}: $${disbursement.amount}`;
                disbursementsList.appendChild(li);
            });
        }

        // Function to submit disbursements
        async function submitDisbursements() {
            // Show loading indicator
            document.getElementById('loading').style.display = 'block';

            try {
                // Call backend API to process disbursements
                const response = await fetch('YOUR_API_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(disbursements)
                });

                // Check if request was successful
                if (!response.ok) {
                    throw new Error('Failed to submit disbursements.');
                }

                // Reset disbursements array and clear input fields
                disbursements = [];
                document.getElementById('recipient').value = '';
                document.getElementById('amount').value = '';
                updateDisbursementsList();
                alert('Disbursements submitted successfully!');
            } catch (error) {
                alert(error.message);
            } finally {
                // Hide loading indicator
                document.getElementById('loading').style.display = 'none';
            }
        }

        
         // Function to show support page
         function showSupport() {
            document.getElementById('supportPage').style.display = 'block';
        }

        // Function to handle support form submission
        function submitSupport() {
            const message = document.getElementById('message').value;

            // Implement your support form submission logic here
            // For demonstration, let's just display the entered message
            alert(`Support request submitted:\n${message}`);

            // Clear the message field after submission
            document.getElementById('message').value = '';
        }