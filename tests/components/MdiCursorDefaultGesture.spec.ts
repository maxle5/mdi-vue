
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCursorDefaultGesture from "../../src/components/MdiCursorDefaultGesture.vue";

test("MdiCursorDefaultGesture snapshot", () => {
  const wrapper = mount(MdiCursorDefaultGesture, {});
  expect(wrapper.html()).toMatchSnapshot();
});
