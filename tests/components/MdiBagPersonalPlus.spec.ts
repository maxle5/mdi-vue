
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagPersonalPlus from "../../src/components/MdiBagPersonalPlus.vue";

test("MdiBagPersonalPlus snapshot", () => {
  const wrapper = mount(MdiBagPersonalPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
