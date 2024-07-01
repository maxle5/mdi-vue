
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocketIt from "../../src/components/MdiPowerSocketIt.vue";

test("MdiPowerSocketIt snapshot", () => {
  const wrapper = mount(MdiPowerSocketIt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
