
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContactlessPayment from "../../src/components/MdiContactlessPayment.vue";

test("MdiContactlessPayment snapshot", () => {
  const wrapper = mount(MdiContactlessPayment, {});
  expect(wrapper.html()).toMatchSnapshot();
});
