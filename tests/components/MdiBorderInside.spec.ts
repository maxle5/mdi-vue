
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderInside from "../../src/components/MdiBorderInside.vue";

test("MdiBorderInside snapshot", () => {
  const wrapper = mount(MdiBorderInside, {});
  expect(wrapper.html()).toMatchSnapshot();
});
