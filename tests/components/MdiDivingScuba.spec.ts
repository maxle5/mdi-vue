
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivingScuba from "../../src/components/MdiDivingScuba.vue";

test("MdiDivingScuba snapshot", () => {
  const wrapper = mount(MdiDivingScuba, {});
  expect(wrapper.html()).toMatchSnapshot();
});
