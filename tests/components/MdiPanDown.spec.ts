
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanDown from "../../src/components/MdiPanDown.vue";

test("MdiPanDown snapshot", () => {
  const wrapper = mount(MdiPanDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
