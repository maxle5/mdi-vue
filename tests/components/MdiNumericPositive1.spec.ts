
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumericPositive1 from "../../src/components/MdiNumericPositive1.vue";

test("MdiNumericPositive1 snapshot", () => {
  const wrapper = mount(MdiNumericPositive1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
