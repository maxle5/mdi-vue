
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric0 from "../../src/components/MdiNumeric0.vue";

test("MdiNumeric0 snapshot", () => {
  const wrapper = mount(MdiNumeric0, {});
  expect(wrapper.html()).toMatchSnapshot();
});
