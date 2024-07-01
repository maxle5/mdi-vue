
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedSingle from "../../src/components/MdiBedSingle.vue";

test("MdiBedSingle snapshot", () => {
  const wrapper = mount(MdiBedSingle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
