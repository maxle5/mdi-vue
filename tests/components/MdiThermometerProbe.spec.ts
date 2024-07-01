
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerProbe from "../../src/components/MdiThermometerProbe.vue";

test("MdiThermometerProbe snapshot", () => {
  const wrapper = mount(MdiThermometerProbe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
