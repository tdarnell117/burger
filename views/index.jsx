const React = require('react');

const Page = () =>
<html lang="en">
<head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
    <link rel="stylesheet" href="css/style.css"/>
    <title>Eat-Da-Burger</title>
</head>
<body>
<div className="container">
    <div className="col-sm-12">
        <div className="row">
            <h1>Eat Da Burger</h1>
        </div>
        <div className="row">
            <img src="images/burger.png" alt="burger"/>
        </div>
        <div className="row">
        <img src="images/bob.gif" alt="bob"/>
        </div>
        <div className="row">
        <form>
            <label htmlFor="Eat a Burger"><h3>What burger would you like to eat?</h3></label>
            <input type="text" id="createBurger"/>
        </form>
        <button type="button" className="btn btn-primary">Submit</button>
        </div>

    <div className="container">
        <div className="row">
            <div className="col-sm-6, border" id="eat">
            <h1>Burgers to Eat!</h1>
            <ul>
                <li></li>
            </ul>
        </div>
            <div className="col-sm-6, border" id="devoured">
            <h1>Burgers Devoured!</h1>
            <ul>
                <li></li>
            </ul>
        </div>

        </div>
    </div>

    </div>
</div>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
</body>
</html>

module.exports = Page