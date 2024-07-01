
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransmissionTowerExport from "../../src/components/MdiTransmissionTowerExport.vue";

test("MdiTransmissionTowerExport snapshot", () => {
  const wrapper = mount(MdiTransmissionTowerExport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
