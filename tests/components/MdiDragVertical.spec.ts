
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDragVertical from "../../src/components/MdiDragVertical.vue";

test("MdiDragVertical snapshot", () => {
  const wrapper = mount(MdiDragVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
