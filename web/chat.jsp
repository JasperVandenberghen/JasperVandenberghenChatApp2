<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<jsp:include page="head.jsp">
    <jsp:param name="title" value="Chat" />
</jsp:include>

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
    <div id="currentStatus">
        <p> Status: ${status}</p>
    </div>

    <c:if test="${user != null}">
    <table>
            <tbody>
                <c:forEach var="friend" items="${friends}">
                    <tr>
                        <td> ${friend.getFirstName()}</td>
                        <td> ${friend.getCurrentStatus()}</td>
                    </tr>
                </c:forEach>
            </tbody>
    </table></c:if>





        <label for="changeStatus">Change status </label>
        <input type="text" id="changeStatus" name="changeStatus" value="Away">
        <input type="submit" id="changeButton" value="Change">




        <label for="addFriend">Add friend </label>
        <input type="email" id="addFriend" name="addFriend" value="user@email.com">
        <input type="submit" id="addButton" value="Add">



</main>

<jsp:include page="footer.jsp">
    <jsp:param name="title" value="Home" />
</jsp:include>
<script src="js/chat.js"></script>
</body>
</html>