
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrescription from "../../src/components/MdiPrescription.vue";

test("MdiPrescription snapshot", () => {
  const wrapper = mount(MdiPrescription, {});
  expect(wrapper.html()).toMatchSnapshot();
});
