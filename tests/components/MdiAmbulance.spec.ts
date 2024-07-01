
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAmbulance from "../../src/components/MdiAmbulance.vue";

test("MdiAmbulance snapshot", () => {
  const wrapper = mount(MdiAmbulance, {});
  expect(wrapper.html()).toMatchSnapshot();
});
