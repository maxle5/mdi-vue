
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9Plus from "../../src/components/MdiNumeric9Plus.vue";

test("MdiNumeric9Plus snapshot", () => {
  const wrapper = mount(MdiNumeric9Plus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
