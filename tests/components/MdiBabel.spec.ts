
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBabel from "../../src/components/MdiBabel.vue";

test("MdiBabel snapshot", () => {
  const wrapper = mount(MdiBabel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
