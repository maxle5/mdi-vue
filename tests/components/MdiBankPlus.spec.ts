
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankPlus from "../../src/components/MdiBankPlus.vue";

test("MdiBankPlus snapshot", () => {
  const wrapper = mount(MdiBankPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
