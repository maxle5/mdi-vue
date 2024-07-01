
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBio from "../../src/components/MdiBio.vue";

test("MdiBio snapshot", () => {
  const wrapper = mount(MdiBio, {});
  expect(wrapper.html()).toMatchSnapshot();
});
