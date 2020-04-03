<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<header role="banner">
<img alt="Books" src="images/chat.png">

<nav>
<ul>


    <li ${param.id eq 'Home'? 'id="actual"' : ''}><a href="Controller?action=Home">Home</a></li>
    <li ${param.id eq 'Chat'? 'id="actual"' : ''}><a href="Controller?action=Chat">Chat</a></li>








</ul>
</nav>
<h2>
${param.title}
</h2>

</header>