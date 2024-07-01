
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFax from "../../src/components/MdiFax.vue";

test("MdiFax snapshot", () => {
  const wrapper = mount(MdiFax, {});
  expect(wrapper.html()).toMatchSnapshot();
});
