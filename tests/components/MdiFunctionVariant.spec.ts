
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFunctionVariant from "../../src/components/MdiFunctionVariant.vue";

test("MdiFunctionVariant snapshot", () => {
  const wrapper = mount(MdiFunctionVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
