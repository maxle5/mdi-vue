
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardOffOutline from "../../src/components/MdiCreditCardOffOutline.vue";

test("MdiCreditCardOffOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
