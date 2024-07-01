
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGenderNonBinary from "../../src/components/MdiGenderNonBinary.vue";

test("MdiGenderNonBinary snapshot", () => {
  const wrapper = mount(MdiGenderNonBinary, {});
  expect(wrapper.html()).toMatchSnapshot();
});
