
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowerSocketCh from "../../src/components/MdiPowerSocketCh.vue";

test("MdiPowerSocketCh snapshot", () => {
  const wrapper = mount(MdiPowerSocketCh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
