
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyboardBackspace from "../../src/components/MdiKeyboardBackspace.vue";

test("MdiKeyboardBackspace snapshot", () => {
  const wrapper = mount(MdiKeyboardBackspace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
