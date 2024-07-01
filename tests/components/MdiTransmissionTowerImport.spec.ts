
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransmissionTowerImport from "../../src/components/MdiTransmissionTowerImport.vue";

test("MdiTransmissionTowerImport snapshot", () => {
  const wrapper = mount(MdiTransmissionTowerImport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
