
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric8 from "../../src/components/MdiNumeric8.vue";

test("MdiNumeric8 snapshot", () => {
  const wrapper = mount(MdiNumeric8, {});
  expect(wrapper.html()).toMatchSnapshot();
});
