
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFrenchFries from "../../src/components/MdiFrenchFries.vue";

test("MdiFrenchFries snapshot", () => {
  const wrapper = mount(MdiFrenchFries, {});
  expect(wrapper.html()).toMatchSnapshot();
});
