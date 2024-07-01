
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseLeftClick from "../../src/components/MdiMouseLeftClick.vue";

test("MdiMouseLeftClick snapshot", () => {
  const wrapper = mount(MdiMouseLeftClick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
