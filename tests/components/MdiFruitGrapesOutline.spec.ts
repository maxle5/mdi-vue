
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFruitGrapesOutline from "../../src/components/MdiFruitGrapesOutline.vue";

test("MdiFruitGrapesOutline snapshot", () => {
  const wrapper = mount(MdiFruitGrapesOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
