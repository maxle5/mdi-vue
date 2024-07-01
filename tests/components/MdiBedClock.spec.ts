
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedClock from "../../src/components/MdiBedClock.vue";

test("MdiBedClock snapshot", () => {
  const wrapper = mount(MdiBedClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
