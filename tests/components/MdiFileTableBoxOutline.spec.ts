
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileTableBoxOutline from "../../src/components/MdiFileTableBoxOutline.vue";

test("MdiFileTableBoxOutline snapshot", () => {
  const wrapper = mount(MdiFileTableBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
