
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGarageOpen from "../../src/components/MdiGarageOpen.vue";

test("MdiGarageOpen snapshot", () => {
  const wrapper = mount(MdiGarageOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
