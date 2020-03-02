<template>
  <div class="return-policy-wrap">
    <div class="return-policy-content">
      <h2>Return Policy</h2>
      <h3>
        <strong>
          Thank you for using ForUdesigns!Our goal is for customers to be happy with their experience. If you are not entirely satisfied with your purchase, we’ll do our best to help.
        </strong>
      </h3>
      <div class="fill-out-now">
        <h3>Cancellation :</h3>
        <p>
          You can cancel the order within 24 hours after the order is placed. If the order is canceled you will get a full refund within 48 hours/2 working days. The order cannot be canceled if the product is already produced and shipped out.
        </p>
        <h3>
          <strong>RETURNS & EXCHANGES</strong>
        </h3>
        <p>
          You have 14 calendar days to return an item from the date you received it. To be eligible for a return, the item must be unused and as-new. The item must be in the original packaging and the receipt/proof of purchase is required.
        </p>
        <h3>
          Returning damaged /Defective items :
        </h3>
        <p>
          If you receive an item that is damaged, not the size or color you ordered, or not reasonably consistent with the item listing, you are eligible for a refund or replacement if you’d like.
        </p>
        <p>
          Please contact us at forudesignsteam@gmail.com, provide your order number and attach a photo of the received item.  we’ll get back to you shortly with a confirmation email.
        </p>
        <p>
          PLEASE NOTE: All colors are subject to the actual products. We may not be able to avoid a little COLOR Differentiation
        </p>
        <h3>
          Refunds :
        </h3>
        <p>
          Once we receive your item, we’ll check it out and notify you of the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your original method of payment. You’ll then receive your money back within 48 hours/2 working days.
        </p>
        <h3>
          Shipping Cost?
        </h3>
        <p>
          If you want to return the purchase, you are responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </p>
        <p>
          We pay the shipping cost in case the product has quality issues: if it is not the product you ordered, or if it is not the size you ordered
        </p>
        <h3>
          <strong>
            HAVE YOU NOT RECEIVED YOUR REFUND?
          </strong>
        </h3>
        <p>
          Please, make sure to check your bank account and contact your bank. If you haven’t received your refund within two working days, please contact us at business@forudesigns.com.
        </p>
        <p>
          <nuxt-link to="/contact-us" class="btn-01">
            Fill Out Now
          </nuxt-link>
        </p>
      </div>
      <h4>
        <strong>
          <b>
            Please contact our Customer service at info@forudesigns.com to get the return address.
          </b>
        </strong>
      </h4>
      <h4>
        <strong>
          <b>
            And here are the kinds of RETURN reasons as follows for reference.
          </b>
          </strong>
      </h4>
      <table>
        <thead>
        <tr>
          <th colspan="2">Return Form</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reason:</td>
            <td>Agree Or Disagree</td>
          </tr>
          <tr>
            <td>Quality Issue</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Colors Issue</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Print Issue</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Sizes Issue</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Delay production over 10 days</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Returned by Delivery and no reason</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>TNs no found after 15 days</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Missing Items</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Shipping Over 45 days by EMS</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Shipping Over 30 days by EXPRESS</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Copyright products</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>No more updates after 15 days</td>
            <td>Agree</td>
          </tr>
          <tr>
            <td>Artworks Issue by customer</td>
            <td>Disagree</td>
          </tr>
          <tr>
            <td>Delivered but not received: No one at home</td>
            <td>Disagree</td>
          </tr>
          <tr>
            <td>Clearance delayed</td>
            <td>Disagree</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  .return-policy-wrap {
    width: 1280px;
    min-height: 600px;
    margin: 0px auto;
    padding: 0px 15px;
    .return-policy-content {
      width: 100%;
      h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
        line-height: 117px;
        margin: 0px;
        border-bottom: 1px solid rgb(223, 223, 235);
      }
      h3 {
        text-transform: uppercase;
        color: rgb(64, 53, 78);
        font-size: 16px;
        font-weight: 700;
        line-height: 25px;
      }
      h4 {
        margin: 33px 0px 21px;
      }
      .fill-out-now {
        padding: 32px 0px 34px;
        border-top: 1px solid rgb(223, 223, 235);
        border-bottom: 1px solid rgb(223, 223, 235);


        p {
          color: rgb(140, 149, 165);
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
        }
        a {
          display: block;
          width: 165px;
          height: 55px;
          font-size: 16px;
          line-height: 55px;
          margin: 34px auto 0px;
        }
      }
      table {
        width: 100%;
        margin-bottom: 50px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(223, 223, 235);
        border-image: initial;
        border-spacing: 0;
        border-collapse: collapse;
        background-color: transparent;

        thead {
          width: 100%;
          tr {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid rgb(223, 223, 235);
            background: rgb(245, 245, 250);
          }
        }

        tbody {
          display: table-row-group;
          vertical-align: middle;
          border-color: inherit;
        }

        tr td {
          width: 50%;
          height: 50px;
          text-align: center;
          color: rgb(140, 149, 165);
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          border-bottom: 1px solid rgb(223, 223, 235);
        }

        tr:first-child td {
          color: rgb(64, 53, 78);
          font-weight: 700;
        }
      }
    }
  }

  .return-policy-wrap .return-policy-content table thead tr th {
    padding-left: 21px;
  }
</style>
