
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardEditOutline from "../../src/components/MdiCreditCardEditOutline.vue";

test("MdiCreditCardEditOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
