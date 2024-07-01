
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumericOff from "../../src/components/MdiNumericOff.vue";

test("MdiNumericOff snapshot", () => {
  const wrapper = mount(MdiNumericOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
