
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashMultiple from "../../src/components/MdiCashMultiple.vue";

test("MdiCashMultiple snapshot", () => {
  const wrapper = mount(MdiCashMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
