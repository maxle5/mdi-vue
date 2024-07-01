
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGenderTransgender from "../../src/components/MdiGenderTransgender.vue";

test("MdiGenderTransgender snapshot", () => {
  const wrapper = mount(MdiGenderTransgender, {});
  expect(wrapper.html()).toMatchSnapshot();
});
