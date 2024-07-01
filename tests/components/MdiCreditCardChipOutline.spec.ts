
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardChipOutline from "../../src/components/MdiCreditCardChipOutline.vue";

test("MdiCreditCardChipOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardChipOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
