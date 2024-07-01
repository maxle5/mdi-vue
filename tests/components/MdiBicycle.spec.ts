
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBicycle from "../../src/components/MdiBicycle.vue";

test("MdiBicycle snapshot", () => {
  const wrapper = mount(MdiBicycle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
