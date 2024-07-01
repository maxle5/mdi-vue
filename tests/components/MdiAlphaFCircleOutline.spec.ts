
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaFCircleOutline from "../../src/components/MdiAlphaFCircleOutline.vue";

test("MdiAlphaFCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaFCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
