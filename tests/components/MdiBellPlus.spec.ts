
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellPlus from "../../src/components/MdiBellPlus.vue";

test("MdiBellPlus snapshot", () => {
  const wrapper = mount(MdiBellPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
