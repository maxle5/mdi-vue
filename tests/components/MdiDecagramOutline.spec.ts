
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDecagramOutline from "../../src/components/MdiDecagramOutline.vue";

test("MdiDecagramOutline snapshot", () => {
  const wrapper = mount(MdiDecagramOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
