
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCursorPointer from "../../src/components/MdiCursorPointer.vue";

test("MdiCursorPointer snapshot", () => {
  const wrapper = mount(MdiCursorPointer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
