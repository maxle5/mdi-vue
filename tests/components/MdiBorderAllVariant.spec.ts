
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderAllVariant from "../../src/components/MdiBorderAllVariant.vue";

test("MdiBorderAllVariant snapshot", () => {
  const wrapper = mount(MdiBorderAllVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
