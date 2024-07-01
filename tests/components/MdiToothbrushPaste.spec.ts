
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToothbrushPaste from "../../src/components/MdiToothbrushPaste.vue";

test("MdiToothbrushPaste snapshot", () => {
  const wrapper = mount(MdiToothbrushPaste, {});
  expect(wrapper.html()).toMatchSnapshot();
});
