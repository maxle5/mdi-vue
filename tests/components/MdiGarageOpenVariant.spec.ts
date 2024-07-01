
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGarageOpenVariant from "../../src/components/MdiGarageOpenVariant.vue";

test("MdiGarageOpenVariant snapshot", () => {
  const wrapper = mount(MdiGarageOpenVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
