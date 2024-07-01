
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageImage from "../../src/components/MdiMessageImage.vue";

test("MdiMessageImage snapshot", () => {
  const wrapper = mount(MdiMessageImage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
