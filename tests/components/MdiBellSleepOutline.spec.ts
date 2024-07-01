
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellSleepOutline from "../../src/components/MdiBellSleepOutline.vue";

test("MdiBellSleepOutline snapshot", () => {
  const wrapper = mount(MdiBellSleepOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
