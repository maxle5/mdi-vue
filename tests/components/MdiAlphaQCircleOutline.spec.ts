
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaQCircleOutline from "../../src/components/MdiAlphaQCircleOutline.vue";

test("MdiAlphaQCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaQCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
