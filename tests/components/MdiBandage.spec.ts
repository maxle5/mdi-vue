
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBandage from "../../src/components/MdiBandage.vue";

test("MdiBandage snapshot", () => {
  const wrapper = mount(MdiBandage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
