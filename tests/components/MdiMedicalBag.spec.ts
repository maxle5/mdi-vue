
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMedicalBag from "../../src/components/MdiMedicalBag.vue";

test("MdiMedicalBag snapshot", () => {
  const wrapper = mount(MdiMedicalBag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
