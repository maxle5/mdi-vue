
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivingHelmet from "../../src/components/MdiDivingHelmet.vue";

test("MdiDivingHelmet snapshot", () => {
  const wrapper = mount(MdiDivingHelmet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
