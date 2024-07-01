
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocketJp from "../../src/components/MdiPowerSocketJp.vue";

test("MdiPowerSocketJp snapshot", () => {
  const wrapper = mount(MdiPowerSocketJp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
