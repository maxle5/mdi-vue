
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankCircleOutline from "../../src/components/MdiBankCircleOutline.vue";

test("MdiBankCircleOutline snapshot", () => {
  const wrapper = mount(MdiBankCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
