
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMedication from "../../src/components/MdiMedication.vue";

test("MdiMedication snapshot", () => {
  const wrapper = mount(MdiMedication, {});
  expect(wrapper.html()).toMatchSnapshot();
});
