
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFence from "../../src/components/MdiFence.vue";

test("MdiFence snapshot", () => {
  const wrapper = mount(MdiFence, {});
  expect(wrapper.html()).toMatchSnapshot();
});
