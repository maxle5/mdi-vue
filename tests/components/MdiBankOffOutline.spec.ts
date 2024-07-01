
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankOffOutline from "../../src/components/MdiBankOffOutline.vue";

test("MdiBankOffOutline snapshot", () => {
  const wrapper = mount(MdiBankOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
