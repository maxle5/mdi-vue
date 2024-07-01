
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPen from "../../src/components/MdiPen.vue";

test("MdiPen snapshot", () => {
  const wrapper = mount(MdiPen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
