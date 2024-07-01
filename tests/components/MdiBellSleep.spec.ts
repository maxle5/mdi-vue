
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellSleep from "../../src/components/MdiBellSleep.vue";

test("MdiBellSleep snapshot", () => {
  const wrapper = mount(MdiBellSleep, {});
  expect(wrapper.html()).toMatchSnapshot();
});
