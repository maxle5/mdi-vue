
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherCloudyAlert from "../../src/components/MdiWeatherCloudyAlert.vue";

test("MdiWeatherCloudyAlert snapshot", () => {
  const wrapper = mount(MdiWeatherCloudyAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
