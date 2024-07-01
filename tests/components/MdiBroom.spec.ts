
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBroom from "../../src/components/MdiBroom.vue";

test("MdiBroom snapshot", () => {
  const wrapper = mount(MdiBroom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
