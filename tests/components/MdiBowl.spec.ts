
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBowl from "../../src/components/MdiBowl.vue";

test("MdiBowl snapshot", () => {
  const wrapper = mount(MdiBowl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
