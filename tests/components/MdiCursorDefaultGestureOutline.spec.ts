
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCursorDefaultGestureOutline from "../../src/components/MdiCursorDefaultGestureOutline.vue";

test("MdiCursorDefaultGestureOutline snapshot", () => {
  const wrapper = mount(MdiCursorDefaultGestureOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
