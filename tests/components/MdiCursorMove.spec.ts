
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCursorMove from "../../src/components/MdiCursorMove.vue";

test("MdiCursorMove snapshot", () => {
  const wrapper = mount(MdiCursorMove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
