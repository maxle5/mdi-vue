
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderLeftVariant from "../../src/components/MdiBorderLeftVariant.vue";

test("MdiBorderLeftVariant snapshot", () => {
  const wrapper = mount(MdiBorderLeftVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
