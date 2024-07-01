
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaRCircleOutline from "../../src/components/MdiAlphaRCircleOutline.vue";

test("MdiAlphaRCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaRCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
