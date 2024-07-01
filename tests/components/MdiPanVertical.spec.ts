
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanVertical from "../../src/components/MdiPanVertical.vue";

test("MdiPanVertical snapshot", () => {
  const wrapper = mount(MdiPanVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
