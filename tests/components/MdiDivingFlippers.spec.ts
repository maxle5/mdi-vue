
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivingFlippers from "../../src/components/MdiDivingFlippers.vue";

test("MdiDivingFlippers snapshot", () => {
  const wrapper = mount(MdiDivingFlippers, {});
  expect(wrapper.html()).toMatchSnapshot();
});
