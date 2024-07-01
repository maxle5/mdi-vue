
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerChevronDown from "../../src/components/MdiThermometerChevronDown.vue";

test("MdiThermometerChevronDown snapshot", () => {
  const wrapper = mount(MdiThermometerChevronDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
