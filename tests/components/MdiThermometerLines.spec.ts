
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerLines from "../../src/components/MdiThermometerLines.vue";

test("MdiThermometerLines snapshot", () => {
  const wrapper = mount(MdiThermometerLines, {});
  expect(wrapper.html()).toMatchSnapshot();
});
