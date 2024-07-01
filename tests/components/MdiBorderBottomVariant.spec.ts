
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderBottomVariant from "../../src/components/MdiBorderBottomVariant.vue";

test("MdiBorderBottomVariant snapshot", () => {
  const wrapper = mount(MdiBorderBottomVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
