
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBinoculars from "../../src/components/MdiBinoculars.vue";

test("MdiBinoculars snapshot", () => {
  const wrapper = mount(MdiBinoculars, {});
  expect(wrapper.html()).toMatchSnapshot();
});
