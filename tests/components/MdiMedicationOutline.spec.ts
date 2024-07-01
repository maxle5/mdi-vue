
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMedicationOutline from "../../src/components/MdiMedicationOutline.vue";

test("MdiMedicationOutline snapshot", () => {
  const wrapper = mount(MdiMedicationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
