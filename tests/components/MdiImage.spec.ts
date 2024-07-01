
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImage from "../../src/components/MdiImage.vue";

test("MdiImage snapshot", () => {
  const wrapper = mount(MdiImage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
