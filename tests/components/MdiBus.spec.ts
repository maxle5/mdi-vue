
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBus from "../../src/components/MdiBus.vue";

test("MdiBus snapshot", () => {
  const wrapper = mount(MdiBus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
