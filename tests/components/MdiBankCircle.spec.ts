
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankCircle from "../../src/components/MdiBankCircle.vue";

test("MdiBankCircle snapshot", () => {
  const wrapper = mount(MdiBankCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
