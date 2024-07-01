
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFountainPenTip from "../../src/components/MdiFountainPenTip.vue";

test("MdiFountainPenTip snapshot", () => {
  const wrapper = mount(MdiFountainPenTip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
