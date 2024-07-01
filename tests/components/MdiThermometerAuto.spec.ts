
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerAuto from "../../src/components/MdiThermometerAuto.vue";

test("MdiThermometerAuto snapshot", () => {
  const wrapper = mount(MdiThermometerAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
