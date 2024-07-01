
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlurRadial from "../../src/components/MdiBlurRadial.vue";

test("MdiBlurRadial snapshot", () => {
  const wrapper = mount(MdiBlurRadial, {});
  expect(wrapper.html()).toMatchSnapshot();
});
