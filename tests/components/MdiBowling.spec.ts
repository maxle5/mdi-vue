
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBowling from "../../src/components/MdiBowling.vue";

test("MdiBowling snapshot", () => {
  const wrapper = mount(MdiBowling, {});
  expect(wrapper.html()).toMatchSnapshot();
});
