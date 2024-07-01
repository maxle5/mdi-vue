
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBorderTopVariant from "../../src/components/MdiBorderTopVariant.vue";

test("MdiBorderTopVariant snapshot", () => {
  const wrapper = mount(MdiBorderTopVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
