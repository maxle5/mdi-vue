
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumericNegative1 from "../../src/components/MdiNumericNegative1.vue";

test("MdiNumericNegative1 snapshot", () => {
  const wrapper = mount(MdiNumericNegative1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
