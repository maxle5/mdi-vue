
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAdvertisementsOff from "../../src/components/MdiAdvertisementsOff.vue";

test("MdiAdvertisementsOff snapshot", () => {
  const wrapper = mount(MdiAdvertisementsOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
