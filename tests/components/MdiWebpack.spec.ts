
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebpack from "../../src/components/MdiWebpack.vue";

test("MdiWebpack snapshot", () => {
  const wrapper = mount(MdiWebpack, {});
  expect(wrapper.html()).toMatchSnapshot();
});
