
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPassportBiometric from "../../src/components/MdiPassportBiometric.vue";

test("MdiPassportBiometric snapshot", () => {
  const wrapper = mount(MdiPassportBiometric, {});
  expect(wrapper.html()).toMatchSnapshot();
});
