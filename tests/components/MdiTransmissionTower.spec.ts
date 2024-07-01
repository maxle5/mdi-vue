
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransmissionTower from "../../src/components/MdiTransmissionTower.vue";

test("MdiTransmissionTower snapshot", () => {
  const wrapper = mount(MdiTransmissionTower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
