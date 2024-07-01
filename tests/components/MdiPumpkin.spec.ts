
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPumpkin from "../../src/components/MdiPumpkin.vue";

test("MdiPumpkin snapshot", () => {
  const wrapper = mount(MdiPumpkin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
