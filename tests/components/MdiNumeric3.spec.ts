
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric3 from "../../src/components/MdiNumeric3.vue";

test("MdiNumeric3 snapshot", () => {
  const wrapper = mount(MdiNumeric3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
