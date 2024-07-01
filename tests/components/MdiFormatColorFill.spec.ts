
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatColorFill from "../../src/components/MdiFormatColorFill.vue";

test("MdiFormatColorFill snapshot", () => {
  const wrapper = mount(MdiFormatColorFill, {});
  expect(wrapper.html()).toMatchSnapshot();
});
