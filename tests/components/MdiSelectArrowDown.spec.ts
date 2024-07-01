
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectArrowDown from "../../src/components/MdiSelectArrowDown.vue";

test("MdiSelectArrowDown snapshot", () => {
  const wrapper = mount(MdiSelectArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
