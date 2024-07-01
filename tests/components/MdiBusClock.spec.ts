
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusClock from "../../src/components/MdiBusClock.vue";

test("MdiBusClock snapshot", () => {
  const wrapper = mount(MdiBusClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
