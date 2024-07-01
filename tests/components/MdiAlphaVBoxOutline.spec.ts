
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaVBoxOutline from "../../src/components/MdiAlphaVBoxOutline.vue";

test("MdiAlphaVBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaVBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
