
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaZCircleOutline from "../../src/components/MdiAlphaZCircleOutline.vue";

test("MdiAlphaZCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaZCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
