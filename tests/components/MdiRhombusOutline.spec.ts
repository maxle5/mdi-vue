
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRhombusOutline from "../../src/components/MdiRhombusOutline.vue";

test("MdiRhombusOutline snapshot", () => {
  const wrapper = mount(MdiRhombusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
