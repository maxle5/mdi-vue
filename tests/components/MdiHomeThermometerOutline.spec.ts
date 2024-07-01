
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeThermometerOutline from "../../src/components/MdiHomeThermometerOutline.vue";

test("MdiHomeThermometerOutline snapshot", () => {
  const wrapper = mount(MdiHomeThermometerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
