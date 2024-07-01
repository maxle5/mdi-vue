
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleAnalytics from "../../src/components/MdiGoogleAnalytics.vue";

test("MdiGoogleAnalytics snapshot", () => {
  const wrapper = mount(MdiGoogleAnalytics, {});
  expect(wrapper.html()).toMatchSnapshot();
});
