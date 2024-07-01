
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCursorDefaultClickOutline from "../../src/components/MdiCursorDefaultClickOutline.vue";

test("MdiCursorDefaultClickOutline snapshot", () => {
  const wrapper = mount(MdiCursorDefaultClickOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
