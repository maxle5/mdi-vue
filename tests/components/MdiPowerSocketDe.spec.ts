
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocketDe from "../../src/components/MdiPowerSocketDe.vue";

test("MdiPowerSocketDe snapshot", () => {
  const wrapper = mount(MdiPowerSocketDe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
