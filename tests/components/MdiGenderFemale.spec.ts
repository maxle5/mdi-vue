
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGenderFemale from "../../src/components/MdiGenderFemale.vue";

test("MdiGenderFemale snapshot", () => {
  const wrapper = mount(MdiGenderFemale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
