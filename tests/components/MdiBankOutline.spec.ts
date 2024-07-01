
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankOutline from "../../src/components/MdiBankOutline.vue";

test("MdiBankOutline snapshot", () => {
  const wrapper = mount(MdiBankOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
