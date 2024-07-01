
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardSearchOutline from "../../src/components/MdiCreditCardSearchOutline.vue";

test("MdiCreditCardSearchOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
