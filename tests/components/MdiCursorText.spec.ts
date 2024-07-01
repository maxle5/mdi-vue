
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCursorText from "../../src/components/MdiCursorText.vue";

test("MdiCursorText snapshot", () => {
  const wrapper = mount(MdiCursorText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
