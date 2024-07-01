
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCursorDefault from "../../src/components/MdiCursorDefault.vue";

test("MdiCursorDefault snapshot", () => {
  const wrapper = mount(MdiCursorDefault, {});
  expect(wrapper.html()).toMatchSnapshot();
});
