
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerMinusOutline from "../../src/components/MdiServerMinusOutline.vue";

test("MdiServerMinusOutline snapshot", () => {
  const wrapper = mount(MdiServerMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
