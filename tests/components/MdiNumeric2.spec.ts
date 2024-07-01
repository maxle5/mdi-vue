
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric2 from "../../src/components/MdiNumeric2.vue";

test("MdiNumeric2 snapshot", () => {
  const wrapper = mount(MdiNumeric2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
