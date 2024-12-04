import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Calculator {
    private JFrame frame;
    private JTextField display;
    private StringBuilder currentInput;

    public Calculator() {
        frame = new JFrame("Calculator");
        display = new JTextField();
        currentInput = new StringBuilder();

        // Set up the display
        display.setEditable(false);
        display.setFont(new Font("Arial", Font.PLAIN, 24));
        display.setHorizontalAlignment(SwingConstants.RIGHT);

        // Set up the layout
        frame.setLayout(new BorderLayout());
        frame.add(display, BorderLayout.NORTH);

        // Create the panel for buttons
        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(4, 4));

        // Define the buttons
        String[] buttons = {
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"
        };

        // Add buttons to the panel
        for (String text : buttons) {
            JButton button = new JButton(text);
            button.setFont(new Font("Arial", Font.PLAIN, 20));
            button.addActionListener(new ButtonClickListener());
            panel.add(button);
        }

        // Add the panel to the frame
        frame.add(panel, BorderLayout.CENTER);

        // Set the properties of the frame
        frame.setSize(300, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    // Event handler for button clicks
    private class ButtonClickListener implements ActionListener {
        @Override
        public void actionPerformed(ActionEvent e) {
            String command = e.getActionCommand();

            // If the user clicks on "=" button, calculate the result
            if (command.equals("=")) {
                try {
                    double result = evaluateExpression(currentInput.toString());
                    display.setText(String.valueOf(result));
                    currentInput.setLength(0); // Clear current input
                    currentInput.append(result);
                } catch (Exception ex) {
                    display.setText("Error");
                }
            } 
            // If the user clicks on "C" (clear) button, reset everything
            else if (command.equals("C")) {
                currentInput.setLength(0);
                display.setText("");
            } 
            // Otherwise, add the clicked button value to the current input
            else {
                currentInput.append(command);
                display.setText(currentInput.toString());
            }
        }
    }

    // Method to evaluate the expression
    private double evaluateExpression(String expression) throws Exception {
        // Basic evaluation using the built-in eval method (or could implement custom evaluator)
        return new ScriptEngineManager().getEngineByName("JavaScript").eval(expression).toString();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new Calculator(); // Launch the calculator
            }
        });
    }
}