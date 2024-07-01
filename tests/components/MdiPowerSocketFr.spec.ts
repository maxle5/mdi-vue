
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocketFr from "../../src/components/MdiPowerSocketFr.vue";

test("MdiPowerSocketFr snapshot", () => {
  const wrapper = mount(MdiPowerSocketFr, {});
  expect(wrapper.html()).toMatchSnapshot();
});
