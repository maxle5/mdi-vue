
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDrawPen from "../../src/components/MdiDrawPen.vue";

test("MdiDrawPen snapshot", () => {
  const wrapper = mount(MdiDrawPen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
