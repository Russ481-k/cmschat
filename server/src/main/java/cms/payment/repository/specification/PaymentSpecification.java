package cms.payment.repository.specification;

import cms.payment.domain.Payment;
import cms.payment.domain.PaymentStatus;
import cms.enroll.domain.Enroll;
import cms.user.domain.User;
import org.springframework.data.jpa.domain.Specification;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Predicate;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.criteria.JoinType;
import cms.lesson.domain.Lesson;

public class PaymentSpecification {

    public static Specification<Payment> filterByAdminCriteria(Long lessonId, Long enrollId, String userId, String tid,
            LocalDate startDate, LocalDate endDate, PaymentStatus status) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            Join<Payment, Enroll> enrollJoin = root.join("enroll", JoinType.LEFT);

            if (lessonId != null) {
                Join<Enroll, Lesson> lessonJoin = enrollJoin.join("lesson", JoinType.LEFT);
                predicates.add(criteriaBuilder.equal(lessonJoin.get("lessonId"), lessonId));
            }

            if (enrollId != null) {
                predicates.add(criteriaBuilder.equal(enrollJoin.get("enrollId"), enrollId));
            }

            if (userId != null && !userId.trim().isEmpty()) {
                Join<Enroll, User> userJoin = enrollJoin.join("user");
                predicates.add(criteriaBuilder.equal(userJoin.get("uuid"), userId));
            }

            if (tid != null && !tid.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(root.get("tid"), "%" + tid + "%"));
            }

            if (status != null) {
                predicates.add(criteriaBuilder.equal(root.get("status"), status));
            }

            if (startDate != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("paidAt"),
                        LocalDateTime.of(startDate, LocalTime.MIN)));
            }

            if (endDate != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("paidAt"),
                        LocalDateTime.of(endDate, LocalTime.MAX)));
            }

            if (query.getResultType().equals(Payment.class) && query.getOrderList().isEmpty()) {
                query.orderBy(criteriaBuilder.desc(root.get("paidAt")));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}