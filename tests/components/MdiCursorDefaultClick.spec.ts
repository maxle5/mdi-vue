
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCursorDefaultClick from "../../src/components/MdiCursorDefaultClick.vue";

test("MdiCursorDefaultClick snapshot", () => {
  const wrapper = mount(MdiCursorDefaultClick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
