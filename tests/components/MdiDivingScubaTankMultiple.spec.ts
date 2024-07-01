
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivingScubaTankMultiple from "../../src/components/MdiDivingScubaTankMultiple.vue";

test("MdiDivingScubaTankMultiple snapshot", () => {
  const wrapper = mount(MdiDivingScubaTankMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
