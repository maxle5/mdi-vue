
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashRefund from "../../src/components/MdiCashRefund.vue";

test("MdiCashRefund snapshot", () => {
  const wrapper = mount(MdiCashRefund, {});
  expect(wrapper.html()).toMatchSnapshot();
});
