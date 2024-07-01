
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaIBoxOutline from "../../src/components/MdiAlphaIBoxOutline.vue";

test("MdiAlphaIBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaIBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
