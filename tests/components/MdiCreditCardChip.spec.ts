
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardChip from "../../src/components/MdiCreditCardChip.vue";

test("MdiCreditCardChip snapshot", () => {
  const wrapper = mount(MdiCreditCardChip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
