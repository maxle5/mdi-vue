
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAdvertisements from "../../src/components/MdiAdvertisements.vue";

test("MdiAdvertisements snapshot", () => {
  const wrapper = mount(MdiAdvertisements, {});
  expect(wrapper.html()).toMatchSnapshot();
});
