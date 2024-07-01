
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransmissionTowerOff from "../../src/components/MdiTransmissionTowerOff.vue";

test("MdiTransmissionTowerOff snapshot", () => {
  const wrapper = mount(MdiTransmissionTowerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
