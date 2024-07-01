
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaVCircleOutline from "../../src/components/MdiAlphaVCircleOutline.vue";

test("MdiAlphaVCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaVCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
