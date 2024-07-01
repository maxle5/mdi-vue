
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherCloudyClock from "../../src/components/MdiWeatherCloudyClock.vue";

test("MdiWeatherCloudyClock snapshot", () => {
  const wrapper = mount(MdiWeatherCloudyClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
