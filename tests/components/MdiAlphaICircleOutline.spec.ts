
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaICircleOutline from "../../src/components/MdiAlphaICircleOutline.vue";

test("MdiAlphaICircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaICircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
