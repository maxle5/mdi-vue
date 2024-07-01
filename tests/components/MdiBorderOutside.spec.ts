
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderOutside from "../../src/components/MdiBorderOutside.vue";

test("MdiBorderOutside snapshot", () => {
  const wrapper = mount(MdiBorderOutside, {});
  expect(wrapper.html()).toMatchSnapshot();
});
