
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBatteryMinusVariant from "../../src/components/MdiBatteryMinusVariant.vue";

test("MdiBatteryMinusVariant snapshot", () => {
  const wrapper = mount(MdiBatteryMinusVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
