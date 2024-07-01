
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodVariant from "../../src/components/MdiFoodVariant.vue";

test("MdiFoodVariant snapshot", () => {
  const wrapper = mount(MdiFoodVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
