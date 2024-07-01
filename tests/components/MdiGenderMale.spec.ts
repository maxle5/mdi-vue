
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGenderMale from "../../src/components/MdiGenderMale.vue";

test("MdiGenderMale snapshot", () => {
  const wrapper = mount(MdiGenderMale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
