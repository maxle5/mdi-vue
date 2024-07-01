
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderTop from "../../src/components/MdiBorderTop.vue";

test("MdiBorderTop snapshot", () => {
  const wrapper = mount(MdiBorderTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
