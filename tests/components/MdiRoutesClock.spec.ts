
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRoutesClock from "../../src/components/MdiRoutesClock.vue";

test("MdiRoutesClock snapshot", () => {
  const wrapper = mount(MdiRoutesClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
