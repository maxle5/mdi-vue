
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGenderMaleFemaleVariant from "../../src/components/MdiGenderMaleFemaleVariant.vue";

test("MdiGenderMaleFemaleVariant snapshot", () => {
  const wrapper = mount(MdiGenderMaleFemaleVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
