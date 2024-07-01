
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaFBoxOutline from "../../src/components/MdiAlphaFBoxOutline.vue";

test("MdiAlphaFBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaFBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
