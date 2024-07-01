
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9 from "../../src/components/MdiNumeric9.vue";

test("MdiNumeric9 snapshot", () => {
  const wrapper = mount(MdiNumeric9, {});
  expect(wrapper.html()).toMatchSnapshot();
});
