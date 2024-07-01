
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiListBoxOutline from "../../src/components/MdiListBoxOutline.vue";

test("MdiListBoxOutline snapshot", () => {
  const wrapper = mount(MdiListBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
