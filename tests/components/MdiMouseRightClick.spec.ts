
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseRightClick from "../../src/components/MdiMouseRightClick.vue";

test("MdiMouseRightClick snapshot", () => {
  const wrapper = mount(MdiMouseRightClick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
