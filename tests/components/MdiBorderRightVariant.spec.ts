
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderRightVariant from "../../src/components/MdiBorderRightVariant.vue";

test("MdiBorderRightVariant snapshot", () => {
  const wrapper = mount(MdiBorderRightVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
