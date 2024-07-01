
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaECircleOutline from "../../src/components/MdiAlphaECircleOutline.vue";

test("MdiAlphaECircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaECircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
