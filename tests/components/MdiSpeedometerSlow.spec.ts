
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpeedometerSlow from "../../src/components/MdiSpeedometerSlow.vue";

test("MdiSpeedometerSlow snapshot", () => {
  const wrapper = mount(MdiSpeedometerSlow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
