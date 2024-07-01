
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaGCircleOutline from "../../src/components/MdiAlphaGCircleOutline.vue";

test("MdiAlphaGCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaGCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
