
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterAlert from "../../src/components/MdiWaterAlert.vue";

test("MdiWaterAlert snapshot", () => {
  const wrapper = mount(MdiWaterAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
