<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<jsp:include page="head.jsp">
    <jsp:param name="title" value="Chat" />
</jsp:include>
    <script src="js/friends.js"></script>
</head>
<body>
<jsp:include page="header.jsp">
    <jsp:param name="title" value="Chat" />
</jsp:include>
<main>
    <c:if test="${errors.size()>0 }">
        <div class="danger">
            <ul>
                <c:forEach var="error" items="${errors}">
                    <li>${error}</li>
                </c:forEach>
            </ul>
        </div>
    </c:if>
        <p>Status: ${user.getCurrentStatus()}</p>

    <c:if test="${user != null}">
    <table>

    </table></c:if>



    <form method="post" action="Controller?action=ChangeStatus">

        <label for="customStatus">Change status </label>
        <input type="text" id="customStatus" name="customStatus" value="Away">
        <input type="submit" id="change" value="Change">


    </form>

    <form method="post" action="Controller?action=AddFriend">

        <label for="addFriend">Add friend </label>
        <input type="email" id="addFriend" name="addFriend" value="user@email.com">
        <input type="submit" id="add" value="Add">

    </form>

</main>

<jsp:include page="footer.jsp">
    <jsp:param name="title" value="Home" />
</jsp:include>
</body>
</html>