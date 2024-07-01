
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagPlus from "../../src/components/MdiFlagPlus.vue";

test("MdiFlagPlus snapshot", () => {
  const wrapper = mount(MdiFlagPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
