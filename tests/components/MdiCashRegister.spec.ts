
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashRegister from "../../src/components/MdiCashRegister.vue";

test("MdiCashRegister snapshot", () => {
  const wrapper = mount(MdiCashRegister, {});
  expect(wrapper.html()).toMatchSnapshot();
});
