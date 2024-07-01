
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterBoilerAlert from "../../src/components/MdiWaterBoilerAlert.vue";

test("MdiWaterBoilerAlert snapshot", () => {
  const wrapper = mount(MdiWaterBoilerAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
