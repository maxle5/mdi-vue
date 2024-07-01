
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerChevronUp from "../../src/components/MdiThermometerChevronUp.vue";

test("MdiThermometerChevronUp snapshot", () => {
  const wrapper = mount(MdiThermometerChevronUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
