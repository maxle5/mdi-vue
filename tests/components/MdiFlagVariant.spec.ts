
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariant from "../../src/components/MdiFlagVariant.vue";

test("MdiFlagVariant snapshot", () => {
  const wrapper = mount(MdiFlagVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
