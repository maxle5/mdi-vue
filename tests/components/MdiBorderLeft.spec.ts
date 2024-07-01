
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderLeft from "../../src/components/MdiBorderLeft.vue";

test("MdiBorderLeft snapshot", () => {
  const wrapper = mount(MdiBorderLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
